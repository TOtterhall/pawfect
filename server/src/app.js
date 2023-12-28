const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const { productRouter } = require("./resources/product/product.router");
//Also need to add errorhandler
const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["My0Very1S3cr3tKey8"],
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: "strict",
    httpOnly: true,
    secure: false,
  })
);

//Routes

app.use("/api", productRouter);
app.use((req, res) => {
  console.log("!404!");
  res.status(404).json("missing resource");
});

module.exports = { app };