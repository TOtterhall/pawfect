const { Router } = require("express");
const { validate } = require("../middlewares");
const {
  getOrders,
  createOrder,
  getCustomerOrders,
} = require("./order.controller");
const { OrderValidationSchema } = require("./order.model");
const orderRouter = Router();

orderRouter.get("/orders", getOrders);
orderRouter.post(
  "/orders/placeorder",

  createOrder
);
orderRouter.post(
  "/orders/createorder",

  createOrder
);

orderRouter.get("/orders/:customerId", getCustomerOrders);
module.exports = { orderRouter };
