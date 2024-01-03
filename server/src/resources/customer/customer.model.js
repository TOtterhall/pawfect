const { model, Schema } = require("mongoose");
const Joi = require("joi");

//SCHEMA
const CustomerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
});

//MODELL
// const CustomerModel = model.customer || model("customer", CustomerSchema);
const CustomerModel = model("customer", CustomerSchema);
//VALLIDATION
const CustomerValidationSchema = Joi.object({
  email: Joi.string().strict().required(),
  password: Joi.string().strict().required(),
});

module.exports = { CustomerModel, CustomerValidationSchema };
