const { Router } = require("express");

const { registerCustomer } = require("./customer.controller");
// const { CustomerVallidationSchema } = require("./customer.model");

const customerRouter = Router();
customerRouter.post("/customers/register", registerCustomer);

module.exports = { customerRouter };
