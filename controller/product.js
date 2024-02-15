const fs = require("fs");
// fs is file system
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

exports.getProduct = (req, res) => {
  // console.log(req.params.id);
  exports.id = +req.params.id;
  exports.product = products.find((p) => p.id === id);
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  exports.id = +req.params.id;
  exports.productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({ type: "Put Done" });
};

exports.updateProduct = (req, res) => {
  exports.id = +req.params.id;
  exports.productIndex = products.findIndex((p) => p.id === id);
  exports.product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ type: "Patch Done" });
};

exports.deleteProduct = (req, res) => {
  exports.id = +req.params.id;
  exports.productIndex = products.findIndex((e) => e.id === id);
  exports.product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};
