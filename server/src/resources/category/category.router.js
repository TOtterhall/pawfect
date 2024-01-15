const { Router } = require("express");
const { ifmodelexist } = require("../middlewares");
const {
  getAllCategories,
  getSpecificCategory,
} = require("./category.controller");
const { CategorySchema } = require("./category.model");

const categoryRouter = Router();
categoryRouter.get("/categories", getAllCategories);
categoryRouter.get(
  "/categories/:id",
  ifmodelexist(CategorySchema),
  getSpecificCategory
);

module.exports = { categoryRouter };
