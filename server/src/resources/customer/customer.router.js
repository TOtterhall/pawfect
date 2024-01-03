const { Router } = require("express");

const {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
} = require("./customer.controller");
// const { CustomerVallidationSchema } = require("./customer.model");

const customerRouter = Router();
customerRouter.post("/customers/register", registerCustomer); //MÅSTE SKAPA VALIDERING
customerRouter.post("/customers/login", loginCustomer);
customerRouter.post("/customers/logout", logoutCustomer);
module.exports = { customerRouter };
