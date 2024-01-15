const { model, Schema, models } = require("mongoose");
const Joi = require("joi");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: false },
    color: { type: String, required: false },
    size: { type: String, required: false },
    category: {
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
  color: Joi.string().optional(),
  size: Joi.string().optional(),
  category: Joi.array().min(1),

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
