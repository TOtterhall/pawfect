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
orderRouter.get("/orders/:customer._Id", getCustomerOrders);
module.exports = { orderRouter };
