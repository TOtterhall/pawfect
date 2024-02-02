const { model, Schema, models } = require("mongoose");
const Joi = require("joi");

//SCHEMA
const CustomerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  adress: { type: String, required: false },
  phoneNumber: { type: String, required: false },

  isAdmin: { type: Boolean, required: true, default: false },
});

//MODELL
const CustomerModel = models.customer || model("customer", CustomerSchema);

//VALLIDATION
const CustomerValidationSchema = Joi.object({
  email: Joi.string().email().strict().required(),
  password: Joi.string().strict().required(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  adress: Joi.string().optional(),
  phoneNumber: Joi.string().optional(),

  isAdmin: Joi.boolean().strict(),
});

module.exports = { CustomerModel, CustomerValidationSchema };
