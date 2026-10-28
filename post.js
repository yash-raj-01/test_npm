const express = require("express");
const { getAuthSession } = require("get-fake-api");

const app = express();
app.use(express.json());

app.post("/api/users", (req, res) => {
  res.status(201).json({ id: Date.now(), ...req.body, createdAt: new Date().toISOString() });
});

app.post("/api/products", (req, res) => {
  res.status(201).json({ id: Date.now(), ...req.body, createdAt: new Date().toISOString() });
});

app.post("/api/auth/login", (req, res) => {
  res.json(getAuthSession(req.body));
});

app.listen(3002, () => console.log("POST routes → http://localhost:3002"));
