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

  // ✅ Ako nedostaje stripe-signature, ignoriši zahtev bez greške
  const sig = req.headers["stripe-signature"];
  if (!sig) {
    console.warn("⚠️ Ignorisan zahtev bez Stripe potpisa");
    return res.status(200).end("Ignored");
  }

  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("❌ Nevažeći Stripe potpis:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ✅ Obradi samo checkout.session.completed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const packageMap = {
      premium: "Premium Program",
      coaching: "1 na 1 Coaching",
      "vendor-airpods": "Vendor Paket – AirPods",
      "vendor-parfemi": "Vendor Paket – Parfemi",
    };

    const userPackage = packageMap[session.metadata?.package] || "Nepoznat paket";

    try {
      await resend.emails.send({
        from: "info@resellerblkn.com",
        to: session.customer_email,
        subject: "Hvala na kupovini – ResellerBalkan",
        html: `<p>Uspešno ste platili <strong>${userPackage}</strong>. Pristup stiže uskoro!</p>`,
      });
    } catch (err) {
      console.error("❌ Greška u slanju emaila:", err);
    }
  }

  return res.status(200).json({ received: true });
}
