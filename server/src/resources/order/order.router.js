const { Router } = require("express");

const { getOrders, createOrder } = require("./order.controller");

const orderRouter = Router();

orderRouter.get("/orders", getOrders);
orderRouter.post("/orders", createOrder);

module.exports = { orderRouter };
