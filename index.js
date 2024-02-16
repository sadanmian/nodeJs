const express = require("express");
const server = express();

const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");

server.use(express.json());
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

// Model view Controller

server.listen(8080, () => {
  console.log("Server Start");
});
