// pages/api/webhook.js

import { buffer } from "micro";
import Stripe from "stripe";
import { Resend } from "resend";

export const config = {
  api: { bodyParser: false },
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

  const sig = req.headers["stripe-signature"];
  if (!sig) return res.status(400).send("Missing Stripe signature header.");

  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Stripe session received:", session);

    const customerEmail =
      session.customer_email || session.customer_details?.email;
    if (!customerEmail) {
      console.error("❌ Email not found in session:", session);
      return res.status(400).send("Email not found in session.");
    }

    const pkg = session.metadata?.package;

    // Nazivi paketa
    const packageMap = {
      "vendor-airpods": "Vendor Paket – AirPods",
      "vendor-parfemi": "Vendor Paket – Parfemi",
      premium:        "Premium Program",
      coaching:       "1 na 1 Coaching",
    };
    const userPackage = packageMap[pkg] || pkg || "Nepoznat paket";

    // Discord linkovi po paketima
    const linkMap = {
      premium: "https://discord.gg/SrG397W8hE",
      coaching: "https://discord.gg/z3y2TQ9EfZ",
    };
    const discordLink = linkMap[pkg];

    // Kontakt telefoni za vendor pakete
    const contactMap = {
      "vendor-airpods": [
        { label: "Strani vendor", phone: "+86 1771 854 8985" },
        { label: "Hrvatska",       phone: "+385 98 869 655" },
        { label: "Srbija",         phone: "+381 62 961 3045" },
      ],
      "vendor-parfemi": [
        { label: "Strani vendor", phone: "+852 4648 4926" },
        { label: "Hrvatska",      phone: "+385 98 869 655" },
        { label: "Srbija",        phone: "+381 69 613 831" },
      ],
    };
    const contacts = contactMap[pkg];

    // Sastavljanje HTML mejla
    const html = `
      <p>Uspješno ste kupili <strong>${userPackage}</strong>.</p>
      ${discordLink ? `<p>Pridružite nam se na Discordu: <a href="${discordLink}">${discordLink}</a></p>` : ""}
      ${contacts ? `
        <p>Kontakt informacije za <strong>${userPackage}</strong>:</p>
        <ul>
          ${contacts.map(c => `<li>${c.label}: ${c.phone}</li>`).join("")}
        </ul>
      ` : ""}
    `;

    try {
      await resend.emails.send({
        from: "info@resellerblkn.com",
        to: customerEmail,
        subject: "Hvala na kupnji – ResellerBalkan",
        html,
      });
      console.log("📨 Email uspešno poslat ka:", customerEmail);
    } catch (mailErr) {
      console.error("❌ Greška u slanju emaila:", mailErr);
    }
  }

  return res.status(200).json({ received: true });
}
