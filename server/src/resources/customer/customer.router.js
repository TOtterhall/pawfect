const { Router } = require("express");

const { validate } = require("../middlewares");
const {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
  authorize,
} = require("./customer.controller");
const { CustomerValidationSchema } = require("./customer.model");

const customerRouter = Router();
customerRouter.post(
  "/customers/register",
  validate(CustomerValidationSchema),
  registerCustomer
);
customerRouter.post(
  "/customers/login",
  validate(CustomerValidationSchema),
  loginCustomer
);
customerRouter.post("/customers/logout", logoutCustomer);
customerRouter.get("/customers/authorize", authorize);
module.exports = { customerRouter };
