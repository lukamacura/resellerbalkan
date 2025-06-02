// pages/api/checkout.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { package: selectedPackage } = req.body;

    const packages = {
      vendor: {
        name: "Vendor Paket",
        amount: 1500, // 15.00 €
      },
      premium: {
        name: "Premium Program",
        amount: 4000, // 40.00 €
      },
      coaching: {
        name: "1 na 1 Coaching",
        amount: 15000, // 150.00 €
      }
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
              },
              unit_amount: selected.amount,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,

      });

      return res.status(200).json({ url: session.url });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
