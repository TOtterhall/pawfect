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

    //TOKEN INNAN ANVÄNDAREN SPARAS
    const token = jwt.sign(
      { customerId: customer._id },
      "bytnamnsedanpånyckeln",
      { expiresIn: "4h" }
    );
    await customer.save();
    res.status(201).json({ customer, token });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

//FUNCTION LOGIN
async function loginCustomer(req, res, next) {
  try {
    const { email, password } = req.body;
    console.log(password);
    // const thisIsThePassword = req.body.password;
    // console.log(thisIsThePassword);

    const customer = await CustomerModel.findOne({
      email: email,
    }).select(`+password`);
    console.log(customer);

    if (!customer) {
      return res.status(401).json({
        message: "Nä du dessa tassar känner vi inte igen... testa igen",
      });
    }

    const correctPassword = await bcrypt.compare(password, customer.password);
    // console.log(correctPassword);
    if (!correctPassword) {
      return res.status(401).json({
        message: "Fel lösenord... testa igen",
      });
    }
    const token = jwt.sign(
      { customerId: customer._id },
      "bytnamnsedanpånyckeln",
      { expiresIn: "4h" }
    );

    res.status(200).json({ customer, token });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

//FUNCTION LOGOUT
async function logoutCustomer(req, res, next) {
  try {
    // if (!req.session || !req.session._id) {
    //   console.log(req.session._id);
    //   return res.status(400).json({
    //     message: "Kan ju inte tassa iväg om du inte kommit hit än...",
    //   });
    // }

    res.clearCookie("jwtToken");
    req.session = null;
    res
      .status(200)
      .json({ message: "Du har tassat ut, välkommen tillbaka..." });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

// //FUNCTION LOGOUT
// async function logoutCustomer(req, res, next) {
//   try {
//     const token = req.cookies.jwtToken;
//     console.log(token);
//     if (!token) {
//       return res.status(400).json({
//         message: "Kan ju inte tassa iväg om du inte kommit hit än...",
//       });
//     }
//     res.clearCookie("jwtToken");
//     res
//       .status(204)
//       .json({ message: "Du har tassat ut, välkommen tillbaka..." });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// }

//TO DO kolla på
//-cookie
//-middlewares
//-auth
//-OAuth/google?
//-CLIENT- LOGIN FORM
//-Kolla listan TOdos
//-Lägga till productmodell
//-Lägga till i customer modell
//COOKIE
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

module.exports = { registerCustomer, loginCustomer, logoutCustomer };
