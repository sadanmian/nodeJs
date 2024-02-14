const fs = require("fs");
// fs is file system
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
const server = express();

// body parser
server.use(express.json());
// url encodeURI
// server.use(express.urlencoded());
// server.use(morgan("default"));
// server.use(express.static("public"));

// Middleware
// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

// server.use(auth);

// API - Endpoint - Route

// Products
// API Route, base url

// Create POST /products/
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

// Reat GET Products
server.get("/products", (req, res) => {
  res.status(200).json(products);
});
// Read GET Products/:id
server.get("/products/:id", (req, res) => {
  // console.log(req.params.id);
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// Update PUT /products/:id
// PUT for override
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({ type: "Put Done" });
});
// PATCH for updation of old data
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ type: "Patch Done" });
});

// DELETE /products/:id
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((e) => e.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

// server.get("/demo", (req, res) => {
//   // res.send("<h1>hello</h1>");
//   // res.sendFile("/Users/Acer/Desktop/nodeJs/index.html");
//   // res.json(products);
//   // res.sendStatus(200);
//   res.status(200).send("<h1>This is Sadan Mian</h1>");
// });

server.listen(8080, () => {
  console.log("Server Start");
});
