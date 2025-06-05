import { buffer } from "micro";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("Webhook Error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Ako je uspešna uplata
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerEmail = session.customer_details.email;

      // Slanje emaila
      try {
        await resend.emails.send({
          from: "Reseller Balkan <info@resellerbalkan.com>",
          to: customerEmail,
          subject: "Uspešna kupovina 🎉",
          html: `<h1>Hvala ti na kupovini!</h1><p>Uspesno si postao član Reseller Balkan zajednice. Prati dalje upute na sajtu ili nas kontaktiraj ako ti treba pomoć.</p>`,
        });

        return res.status(200).json({ received: true });
      } catch (emailError) {
        console.error("Email send error:", emailError);
        return res.status(500).send("Failed to send email");
      }
    }

    res.status(200).json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
