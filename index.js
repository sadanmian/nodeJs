const fs = require("fs");
// fs is file system
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();

server.get("/", (req, res) => {
  // res.send("<h1>hello</h1>");
  // res.sendFile("/Users/Acer/Desktop/nodeJs/index.html");
  // res.json(products);
  // res.sendStatus(200);
  res.status(200).send("<h1>This is Sadan Mian</h1>");
});

server.listen(8080, () => {
  console.log("Server Start");
});
