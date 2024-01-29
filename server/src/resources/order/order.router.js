const { Router } = require("express");
const { validate } = require("../middlewares");
const { createOrder, getCustomerOrders } = require("./order.controller");
const { OrderValidationSchema } = require("./order.model");
// const {
//   OrderValidationSchema,
//   UpdateOrderValidationSchema,
// } = require("./order.model");

const orderRouter = Router();

orderRouter.post("/orders/createorder", createOrder);

orderRouter.get(
  "/orders/:customerId",

  getCustomerOrders
);
module.exports = { orderRouter };
