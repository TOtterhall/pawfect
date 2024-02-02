const { Router } = require("express");

const { createOrder, getCustomerOrders } = require("./order.controller");

const orderRouter = Router();

orderRouter.post("/orders/createorder", createOrder);

orderRouter.get(
  "/orders/:customerId",

  getCustomerOrders
);
module.exports = { orderRouter };
