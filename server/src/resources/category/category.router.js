const { Router } = require("express");
const { ifmodelexist } = require("../middlewares");
const {
  addCategory,
  getAllCategories,
  getSpecificCategory,
} = require("./category.controller");

const { CategoryValidationSchema } = require("./category.model");

const categoryRouter = Router();
categoryRouter.post("/categories", addCategory);
categoryRouter.get("/categories", getAllCategories);
categoryRouter.get(
  "/categories/:_id",
  ifmodelexist(CategoryValidationSchema),
  getSpecificCategory
);

module.exports = { categoryRouter };
