import { buffer } from "micro";
import Stripe from "stripe";
import { Resend } from "resend";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  let event;

  try {
    const sig = req.headers["stripe-signature"];
    const buf = await buffer(req);

    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log("✅ Webhook event type:", event.type);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    console.log("📦 Full session object:", JSON.stringify(session, null, 2));

    let email = session.customer_email;

    // Ako nema emaila, pokušaj da ga izvučeš preko customer ID-ja
    if (!email && session.customer) {
      try {
        const customer = await stripe.customers.retrieve(session.customer);
        email = customer.email;
        console.log("📬 Dobavljen email iz customer objekta:", email);
      } catch (err) {
        console.error("❌ Greška pri dohvaćanju customer emaila:", err);
      }
    }

    if (!email) {
      console.error("❌ Email nije pronađen ni u session.customer_email ni u customer.email");
      return res.status(400).send("Email nije pronađen.");
    }

    const packageMap = {
      premium: "Premium Program",
      coaching: "1 na 1 Coaching",
      "vendor-airpods": "Vendor Paket – AirPods",
      "vendor-parfemi": "Vendor Paket – Parfemi",
    };

    const userPackage = packageMap[session.metadata?.package] || "Nepoznat paket";

    try {
      console.log("📤 Šaljem email na:", email);
      await resend.emails.send({
        from: "info@resellerblkn.com",
        to: email,
        subject: "Hvala na kupovini – ResellerBalkan",
        html: `<p>Uspešno ste platili <strong>${userPackage}</strong>. Pristup stiže uskoro!</p>`,
      });
      console.log("✅ Email uspešno poslat korisniku.");
    } catch (err) {
      console.error("❌ Greška u slanju emaila:", err);
    }
  }

  return res.status(200).json({ received: true });
}
