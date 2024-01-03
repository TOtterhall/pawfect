const { CustomerModel } = require("./customer.model");
const bcrypt = require("bcrypt");

// ADD CUSTOMER
async function registerCustomer(req, res, next) {
  try {
    //UTÖKA OM ANVÄDAREN REDAN FINNS_SKA INTE KUNNA REGISTRERA SIG DÅ
    const { email, password } = req.body;
    //HASHES PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = new CustomerModel({
      email: email,
      password: hashedPassword,
    });
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
}

// // ADD CUSTOMER
// async function registerCustomer(req, res, next) {
//   try {
//     const customer = new CustomerModel(req.body);
//     await customer.save();
//     res.status(201).json(customer);
//   } catch (err) {
//     next(err);
//   }
// }

module.exports = { registerCustomer };
