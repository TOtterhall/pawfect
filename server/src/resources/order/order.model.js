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
    // price: { type: Number, required: true },
  },
  { versionKey: false }
);

const OrderModel = models.order || model("order", OrderSchema);
const OrderValidationSchema = Joi.object({
  customer: Joi.string().strict().required(),
  // price: Joi.number().strict().required(),
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
