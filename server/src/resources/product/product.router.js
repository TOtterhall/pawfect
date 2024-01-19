const { Router } = require("express");

const {
  addProduct,
  getAllProducts,
  getSpecificProduct,
  getProductsByCategory,
} = require("./product.controller");

const { ifmodelexist } = require("../middlewares");
const { UpdateProductValidationSchema } = require("../product/product.model");
// const { CategoryValidationSchema } = require("../category/category.model");
const productRouter = Router();
productRouter.post(
  "/products",

  addProduct
);
productRouter.get("/products", getAllProducts);
productRouter.get(
  "/products/:_id",
  ifmodelexist(UpdateProductValidationSchema),
  getSpecificProduct
);
productRouter.get("/products/categories/:categoryTitle", getProductsByCategory);

module.exports = { productRouter };
