export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Nedostaje ime ili email." });
    }

    const WEBHOOK_URL = process.env.WEBHOOK_URL;
    if (!WEBHOOK_URL) {
      return res.status(500).json({ error: "WEBHOOK_URL nije definisan" });
    }

    // ✅ URL-encoded body (odvojena polja)
    const body = new URLSearchParams();
    body.append("name", name);
    body.append("email", email);

    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      body, // <-- nije JSON
      // ne postavljamo headers ručno
    });

    const text = await webhookRes.text().catch(() => "");

    if (!webhookRes.ok) {
      return res.status(502).json({ error: "Webhook greška.", details: text });
    }

    return res.status(200).json({ ok: true, webhookResponse: text });
  } catch (err) {
    return res.status(500).json({ error: "Server greška.", details: String(err) });
  }
}
