const { model, Schema } = require("mongoose");
const Joi = require("joi");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    deleted: { type: Boolean, required: false, default: false },
  },
  { versionKey: false }
);

// const ProductModel = models.product || model("product",ProductSchema);
const ProductModel = model("product", ProductSchema);
const AddProductValidationSchema = Joi.object({
  title: Joi.string().strict().required(),
  price: Joi.number().strict().required(),
  image: Joi.string().uri().allow("image/png", "image/jpeg", "image/svg"),
});

const UpdateProductValidationSchema = AddProductValidationSchema.keys({
  _id: Joi.string().strict().required(),
});

module.exports = {
  ProductModel,
  ProductSchema,
  AddProductValidationSchema,
  UpdateProductValidationSchema,
};
