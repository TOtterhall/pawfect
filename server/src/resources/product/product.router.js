const { Router } = require("express");

const {
  addProduct,
  getAllProducts,
  getSpecificProduct,
} = require("./product.controller");

const { ProductModel } = require("./product.model");

const productRouter = Router();
productRouter.post("/products", addProduct);
productRouter.get("/products", getAllProducts);
productRouter.get("/products/:_id", getSpecificProduct);

module.exports = { productRouter };
