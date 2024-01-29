const { OrderModel } = require("../order/order.model");

//FUNCTION- GET ALL ORDERS
async function getOrders(req, res) {
  const order = { customer: req.session._id };
  try {
    const orders = await OrderModel.find(order).populate("customer");
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
}
//FUNCTION- testar att skapa en order
const createOrder = async (req, res, next) => {
  try {
    // const customer = await OrderModel.find({ customer: customerId }).populate(
    //   "customer"
    // );
    const order = new OrderModel(req.body);

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

//FUNCTION- GET ALL ORDERS
async function getCustomerOrders(req, res) {
  const customerId = req.params.customerId;
  try {
    const orders = await OrderModel.find({ customer: customerId }).populate(
      "customer"
    );

    if (!orders || orders.lengt === 0) {
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
  getOrders,
  createOrder,
  getCustomerOrders,
};
