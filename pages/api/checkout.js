// pages/api/checkout.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { package: selectedPackage } = req.body;
    console.log("API pozvan, paket:", selectedPackage);

    const packages = {
      "vendor-airpods": {
        name: "Vendor Paket – AirPods",
        amount: 1500,
        description: "Dobavljači za AirPods i dodatke (Balkan, EU). Idealno za brzu preprodaju uz pouzeće.",
        image: "https://resellerblkn.com/images/airpods.png",
      },
      "vendor-parfemi": {
        name: "Vendor Paket – Parfemi",
        amount: 1500,
        description: "Provereni kontakti za parfeme s velikom maržom. Testirano u resell zajednici.",
        image: "https://resellerblkn.com/images/parfemi.png",
      },
      premium: {
        name: "Premium Program",
        amount: 4000,
        description: "Sve što ti treba da pokreneš profitabilan reselling biznis – od dobavljača do brandiranja.",
        image: "https://resellerblkn.com/images/discord.png",
      },
      coaching: {
        name: "1 na 1 Coaching",
        amount: 15000,
        description: "Personalizirani program uz mentora – strategija, analiza i direktna pomoć u rastu tvog brenda.",
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
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      return res.status(200).json({ url: session.url });
    } catch (err) {
      console.error("Greška u Stripe Checkout:", err);
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
