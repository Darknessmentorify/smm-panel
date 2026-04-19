export default async function handler(req, res) {

  const API_KEY = "TU_API_KEY_AQUI";

  const { service, link, quantity } = req.body;

  const response = await fetch("https://socialmentorify.com/api/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      key: API_KEY,
      action: "add",
      service,
      link,
      quantity
    })
  });

  const data = await response.json();

  res.status(200).json(data);
}
