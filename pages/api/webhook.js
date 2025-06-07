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
    console.warn("❌ Invalid method on /api/webhook:", req.method);
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"];
  if (!sig) {
    console.warn("⚠️ No Stripe signature header provided.");
    return res.status(400).send("Missing signature.");
  }

  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("❌ Stripe signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Stripe session received:", session);

    if (!session.customer_email) {
      console.error("❌ Email nije dostupan u session:", session);
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
      await resend.emails.send({
        from: "info@resellerblkn.com",
        to: session.customer_email,
        subject: "Hvala na kupovini – ResellerBalkan",
        html: `<p>Uspešno ste platili <strong>${userPackage}</strong>. Pristup stiže uskoro!</p>`,
      });
      console.log("📨 Email uspešno poslat ka:", session.customer_email);
    } catch (err) {
      console.error("❌ Greška u slanju emaila:", err);
    }
  }

  return res.status(200).json({ received: true });
}
