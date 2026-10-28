const express = require("express");
const { getUserById, getProductById, getOrderById } = require("get-fake-api");

const app = express();
app.use(express.json());

app.patch("/api/users/:id", (req, res) => {
  res.json({ ...getUserById(req.params.id), ...req.body, updatedAt: new Date().toISOString() });
});

app.patch("/api/products/:id", (req, res) => {
  res.json({ ...getProductById(req.params.id), ...req.body, updatedAt: new Date().toISOString() });
});

app.patch("/api/orders/:id", (req, res) => {
  res.json({ ...getOrderById(req.params.id), ...req.body, updatedAt: new Date().toISOString() });
});

app.listen(3003, () => console.log("PATCH routes → http://localhost:3003"));
