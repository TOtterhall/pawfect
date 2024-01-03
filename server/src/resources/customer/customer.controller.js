const { CustomerModel } = require("./customer.model");

// ADD CUSTOMER
async function registerCustomer(req, res, next) {
  try {
    const customer = new CustomerModel(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
}

module.exports = { registerCustomer };
