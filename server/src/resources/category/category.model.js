const { model, Schema, models } = require("mongoose");
const Joi = require("joi");

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  },
  { versionKey: false }
);

const CategoryModel = models.category || model("category", CategorySchema);

const AddCategoryValidationSchema = Joi.object({
  title: Joi.string().strict().min(5).max(100).required(),

  description: Joi.string().min(5).max(500).optional(),
});

const CategoryValidationSchema = Joi.object({
  _id: Joi.string().strict().required(),
});

module.exports = {
  CategoryModel,
  CategorySchema,
  AddCategoryValidationSchema,
  CategoryValidationSchema,
};
