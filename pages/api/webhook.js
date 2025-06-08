// pages/api/webhook.js

import { buffer } from "micro";
import Stripe from "stripe";
import { Resend } from "resend";

// Onemogući default body parser da bi buffer() mogao da čita raw telo
export const config = {
  api: {
    bodyParser: false,
  },
};

// Inicijalizuj Stripe i Resend
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1) Podržavamo samo POST
  if (req.method !== "POST") {
    console.warn("❌ Invalid method on /api/webhook:", req.method);
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  // 2) Proveri Stripe potpis
  const sig = req.headers["stripe-signature"];
  if (!sig) {
    console.warn("⚠️ No Stripe signature header provided.");
    return res.status(400).send("Missing Stripe signature header.");
  }

  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Stripe signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // 3) Obradi samo checkout.session.completed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Stripe session received:", session);

    // 4) Uzmi email iz session.customer_email ili iz session.customer_details.email
    const customerEmail =
      session.customer_email || session.customer_details?.email;
    if (!customerEmail) {
      console.error("❌ Email nije dostupan u session:", session);
      return res.status(400).send("Email not found in session.");
    }

    // 5) Mapa internalnih naziva paketa na user-friendly tekst
    const packageMap = {
      premium: "Premium Program",
      coaching: "1 na 1 Coaching",
      "vendor-airpods": "Vendor Paket – AirPods",
      "vendor-parfemi": "Vendor Paket – Parfemi",
    };
    const userPackage =
      packageMap[session.metadata?.package] || "Nepoznat paket";

    // 6) Pošalji mejl preko Resend
    try {
      await resend.emails.send({
        from: "info@resellerblkn.com",
        to: customerEmail,
        subject: "Hvala na kupovini – ResellerBalkan",
        html: `<p>Uspešno ste kupili <strong>${userPackage}</strong>. Pristup stiže uskoro!</p>`,
      });
      console.log("📨 Email uspešno poslat ka:", customerEmail);
    } catch (mailErr) {
      console.error("❌ Greška u slanju emaila:", mailErr);
    }
  }

  // 7) Obavezno vrati 200 na sve ostale event-e
  return res.status(200).json({ received: true });
}
