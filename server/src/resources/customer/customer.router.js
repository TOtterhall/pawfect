const { Router } = require("express");
// const { authorization } = require("../middlewares");
const { validate } = require("../middlewares");
const {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
} = require("./customer.controller");
const { CustomerValidationSchema } = require("./customer.model");

const customerRouter = Router();
customerRouter.post(
  "/customers/register",
  validate(CustomerValidationSchema),
  registerCustomer
); //MÅSTE SKAPA VALIDERING
customerRouter.post(
  "/customers/login",
  validate(CustomerValidationSchema),
  loginCustomer
);
customerRouter.post("/customers/logout", logoutCustomer);
module.exports = { customerRouter };
