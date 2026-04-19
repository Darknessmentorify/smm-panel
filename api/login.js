let users = {};

export default function handler(req, res) {
  const { email, password } = req.body;

  const user = users[email];

  if (!user || user.password !== password) {
    return res.status(400).json({ error: "Credenciales incorrectas" });
  }

  res.json({
    email,
    saldo: user.saldo
  });
}
