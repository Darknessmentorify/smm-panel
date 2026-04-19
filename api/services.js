export default async function handler(req, res) {

  const API_KEY = "TU_API_KEY_AQUI";

  try {
    const response = await fetch("https://socialmentorify.com/api/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: API_KEY,
        action: "services"
      })
    });

    const data = await response.json();

    const mod = data.map(s => ({
      ...s,
      rate: (parseFloat(s.rate) * 2).toFixed(2)
    }));

    res.status(200).json(mod);

  } catch (e) {
    res.status(500).json({ error: "Error API" });
  }
}
