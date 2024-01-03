const { Router } = require("express");

const { registerCustomer, loginCustomer } = require("./customer.controller");
// const { CustomerVallidationSchema } = require("./customer.model");

const customerRouter = Router();
customerRouter.post("/customers/register", registerCustomer); //MÅSTE SKAPA VALIDERING
customerRouter.post("/customers/login", loginCustomer);
module.exports = { customerRouter };
