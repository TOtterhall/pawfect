const { model, Schema, models } = require("mongoose");
const Joi = require("joi");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: false, maxlength: 1000 },
    colors: { type: [String], required: false },
    sizes: { type: [String], required: false },
    categories: {
      type: [Schema.Types.String],
      ref: "category",
      required: false,
    },

    deleted: { type: Boolean, required: false, default: false },
    // paymentoptions?egen?instock?
  },
  { versionKey: false }
);

const ProductModel = models.product || model("product", ProductSchema);
// const ProductModel = model("product", ProductSchema);
const AddProductValidationSchema = Joi.object({
  title: Joi.string().strict().required(),
  price: Joi.number().strict().required(),
  image: Joi.string().uri().allow("image/png", "image/jpeg", "image/svg"),
  description: Joi.string().optional(),
  colors: Joi.array().min(1),
  sizes: Joi.array().min(1),
  categories: Joi.array().min(1),

  // paymentoptions?egen?
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
