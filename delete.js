const express = require("express");
const { getUserById, getProductById, getPostById, getOrderById } = require("get-fake-api");

const app = express();

app.delete("/api/users/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} deleted`, deleted: getUserById(req.params.id) });
});

app.delete("/api/products/:id", (req, res) => {
  res.json({ message: `Product ${req.params.id} deleted`, deleted: getProductById(req.params.id) });
});

app.delete("/api/posts/:id", (req, res) => {
  res.json({ message: `Post ${req.params.id} deleted`, deleted: getPostById(req.params.id) });
});

app.delete("/api/orders/:id", (req, res) => {
  res.json({ message: `Order ${req.params.id} deleted`, deleted: getOrderById(req.params.id) });
});

app.listen(3004, () => console.log("DELETE routes → http://localhost:3004"));
