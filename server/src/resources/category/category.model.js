const { model, Schema } = require("mongoose");
const Joi = require("joi");

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  },
  { versionKey: false }
);

// const CategoryModel = models.category || model("category",CategorySchema);
const CategoryModel = model("category", CategorySchema);
const AddCategoryValidationSchema = Joi.object({
  title: Joi.string()
    .strict()
    .min(5)
    .max(100)
    .required()
    .label("Category title"),
  description: Joi.string()
    .min(5)
    .max(500)
    .optional()
    .label("Category description"),
});

const UpdateCategoryValidationSchema = AddCategoryValidationSchema.keys({
  _id: Joi.string().strict().required(),
});

module.exports = {
  CategoryModel,
  CategorySchema,
  AddCategoryValidationSchema,
  UpdateCategoryValidationSchema,
};
