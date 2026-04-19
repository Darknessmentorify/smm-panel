let users = {};

export default function handler(req, res) {
  const { email, password } = req.body;

  if (users[email]) {
    return res.status(400).json({ error: "Usuario ya existe" });
  }

  users[email] = {
    password,
    saldo: 100 // saldo inicial 🔥
  };

  res.json({ ok: true });
}
