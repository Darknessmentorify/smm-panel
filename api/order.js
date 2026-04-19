let users = {};

export default async function handler(req, res) {

  const API_KEY = "TU_API_KEY_AQUI";

  const { email, service, link, quantity, price } = req.body;

  const user = users[email];

  if (!user || user.saldo < price) {
    return res.status(400).json({ error: "Saldo insuficiente" });
  }

  // descontar saldo
  user.saldo -= price;

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

  res.json({
    order: data.order,
    saldo: user.saldo
  });
}
