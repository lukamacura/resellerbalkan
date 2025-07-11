// pages/api/checkout.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const { package: selectedPackage } = req.body;

  const packages = {
    "vendor-airpods": {
      name: "Vendor Paket – AirPods",
      amount: 1500,
      description: "Dobavljači za AirPods i dodatke (Balkan, EU). Idealno za preprodaju.",
      image: "https://resellerblkn.com/images/airpods.png",
    },
    "vendor-parfemi": {
      name: "Vendor Paket – Parfemi",
      amount: 1500,
      description: "Kontakti za parfeme s visokom maržom. Testirano u resell zajednici.",
      image: "https://resellerblkn.com/images/parfemi.png",
    },
    premium: {
      name: "Premium Program",
      amount: 4000,
      description: "11 modula, podrška, dobavljači, brendiranje, skaliranje.",
      image: "https://resellerblkn.com/images/discord.png",
    },
    coaching: {
      name: "1 na 1 Coaching",
      amount: 15000,
      description: "Mentoring i strategija za razvoj tvog online brenda.",
      image: "https://resellerblkn.com/images/discord_pro.png",
    },
  };

  const selected = packages[selectedPackage];

  if (!selected) {
    return res.status(400).json({ error: "Nepoznat paket" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: selected.name,
              description: selected.description,
              images: [selected.image],
            },
            unit_amount: selected.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      metadata: { package: selectedPackage },
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("❌ Greška u Stripe Checkout:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
