const { model, Schema, models } = require("mongoose");
const Joi = require("joi");

const OrderSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      required: true,
      default: Math.floor(Math.random() * 1000000),
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, default: 0 },
      },
    ],
  },
  { versionKey: false }
);

const OrderModel = models.order || model("order", OrderSchema);
const AddOrderValidationSchema = Joi.object({
  customer: Joi.object({
    customerId: Joi.string().strict().required(), // Assuming customer ID is a string
    // Add other customer fields here if needed
  })
    .strict()
    .required(),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string().strict().required(), // Assuming product ID is a string
        quantity: Joi.number().strict().required(),
        price: Joi.number().strict().required(),
      })
    )
    .min(1)
    .required(),
});

const UpdatedOrderValidationSchema = AddOrderValidationSchema.keys({
  _id: Joi.string().strict().required(),
});

module.exports = {
  OrderModel,
  OrderSchema,
  AddOrderValidationSchema,
  UpdatedOrderValidationSchema,
};
