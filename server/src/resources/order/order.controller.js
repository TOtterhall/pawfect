const { OrderModel } = require("../order/order.model");

//FUNCTION- CREATE ORDER
const createOrder = async (req, res, next) => {
  try {
    const { customer, cart } = req.body;
    const order = new OrderModel({
      customer,
      cart,
      orderNumber: Math.floor(Math.random() * 1000000),
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

//FUNCTION- GET ALL ORDERS
async function getCustomerOrders(req, res, next) {
  const customerId = req.session.customerId;
  console.log("Session:", req.session.customerId);
  console.log(customerId);
  try {
    const orders = await OrderModel.find({ customer: customerId }).populate(
      "customer"
    );

    if (!orders) {
      return res
        .status(404)
        .json({ message: "Ordern kunde inte hittas... du får nosa vidare" });
    }
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
}
module.exports = {
  createOrder,
  getCustomerOrders,
};
