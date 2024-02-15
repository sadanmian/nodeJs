const express = require("express");
const morgan = require("morgan");
const server = express();

const productController = require("./controller/product.js");

// body parser
server.use(express.json());

// Model view Controller
server.post("/products", productController.createProduct);
server.get("/products", productController.getAllProducts);
server.get("/products/:id", productController.getProduct);
server.put("/products/:id", productController.replaceProduct);
server.patch("/products/:id", productController.updateProduct);
server.delete("/products/:id", productController.deleteProduct);

server.listen(8080, () => {
  console.log("Server Start");
});
