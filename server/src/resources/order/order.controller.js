const { OrderModel } = require("../order/order.model");

//FUNCTION- GET ALL ORDERS
async function getOrders(req, res) {
  const query = { customer: req.session._id };
  try {
    const orders = await OrderModel.find(query).populate("customer");
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
}
//FUNCTION- testar att skapa en order
const createOrder = async (customerId, cart) => {
  const order = new OrderModel({
    customer: customerId,
    products: cart.map((cartItem) => ({
      product: cartItem.product._id,
      quantity: cartItem.quantity,
      price: cartItem.product.price,
    })),
  });

  const newOrder = await order.save();
  return newOrder;
};

module.exports = {
  getOrders,
  createOrder,
};
