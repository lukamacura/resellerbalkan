if (event.type === "checkout.session.completed") {
  const session = event.data.object;

  if (!session.customer_email) {
    console.error("❌ Email nije dostupan u checkout.session");
    return res.status(400).send("Email nije pronađen.");
  }

  const packageMap = {
    "premium": "Premium Program",
    "coaching": "1 na 1 Coaching",
    "vendor-airpods": "Vendor Paket – AirPods",
    "vendor-parfemi": "Vendor Paket – Parfemi"
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
