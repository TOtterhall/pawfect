const { Router } = require("express");

const { addProduct, getAllProducts } = require("./product.controller");

const { ProductModel } = require("./product.model");

const productRouter = Router();
productRouter.get("/products", getAllProducts);
productRouter.post("/products", addProduct);

module.exports = { productRouter };
