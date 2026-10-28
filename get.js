const express = require("express");
const { getUsers, getUserById, getProducts, getProductById, getOrders, getOrderById } = require("get-fake-api");

const app = express();

app.get("/api/users", (req, res) => res.json(getUsers(5)));
app.get("/api/users/:id", (req, res) => res.json(getUserById(req.params.id)));
app.get("/api/products", (req, res) => res.json(getProducts(5)));
app.get("/api/products/:id", (req, res) => res.json(getProductById(req.params.id)));
app.get("/api/orders", (req, res) => res.json(getOrders(3)));
app.get("/api/orders/:id", (req, res) => res.json(getOrderById(req.params.id)));

app.listen(3001, () => console.log("GET routes → http://localhost:3001"));
