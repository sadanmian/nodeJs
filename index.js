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
server.use(morgan("default"));
server.use(express.static("public"));

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

const auth = (req, res, next) => {
  // console.log(req.query);
  // if (req.body.key === "123") {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  next();
};

// server.use(auth);

// API - Endpoint - Route
server.get("/product/:id", auth, (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
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
