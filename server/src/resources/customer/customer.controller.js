const { CustomerModel } = require("./customer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ADD CUSTOMER
async function registerCustomer(req, res, next) {
  try {
    const { email, password } = req.body;
    //UTÖKA OM ANVÄDAREN REDAN FINNS_SKA INTE KUNNA REGISTRERA SIG DÅ

    const existingCustomer = await CustomerModel.findOne({ email: email });
    if (existingCustomer) {
      return res.status(409).json({
        message:
          "Denna email är redan registrerad, du får tassa vidare och testa igen...",
      });
    }
    //HASHES PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = new CustomerModel({
      email: email,
      password: hashedPassword,
    });
    await customer.save();
    //TOKEN INNAN ANVÄNDAREN SPARAS
    const token = jwt.sign(
      { customerId: customer._id },
      "my2oTalS3c3tk3Y4you",
      { expiresIn: "4h" }
    );

    res.status(201).json({ customer, token });
  } catch (err) {
    next(err);
  }
}

//FUNCTION LOGIN
//FUNCTION LOOUT
//FUNCTION AUTH

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
