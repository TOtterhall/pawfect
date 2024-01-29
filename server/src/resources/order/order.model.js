const { model, Schema, models } = require("mongoose");
const Joi = require("joi");

const OrderItemSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "product", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, default: 0 },
  },
  { _id: false }
);

const OrderSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      required: false,
      default: Math.floor(Math.random() * 1000000),
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    cart: { type: [OrderItemSchema], required: true },
  },
  { versionKey: false }
);

const OrderModel = models.order || model("order", OrderSchema);

const OrderValidationSchema = Joi.object({
  customer: Joi.string().strict().required(),
  cart: Joi.array().items(
    Joi.object({
      product: Joi.string().strict().required(),
      quantity: Joi.number().strict().required(),
      price: Joi.number(),
    })
  ),
});

const UpdateOrderValidationSchema = OrderValidationSchema.keys({
  _id: Joi.string().strict().required(),
});

module.exports = {
  OrderModel,
  OrderSchema,
  OrderValidationSchema,
  UpdateOrderValidationSchema,
};
