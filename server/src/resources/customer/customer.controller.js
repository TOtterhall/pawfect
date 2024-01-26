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
    req.session.customerId = customer._id;
    res.status(201).json({ customer, token });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

//FUNCTION LOGIN
async function loginCustomer(req, res, next) {
  const { email, password } = req.body;
  try {
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

    const correctPassword = await bcrypt.compare(
      req.body.password,
      customer.password
    );
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
    req.session.customerId = customer._id;
    return res.status(200).json({ customer, token });
  } catch (err) {
    console.log(err);
    next();
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

    // res.clearCookie("jwtToken");
    req.session = null;
    console.log(req.session);
    res
      .status(200)
      .json({ message: "Du har tassat ut, välkommen tillbaka..." });
  } catch (err) {
    console.log(err);
    next(err);
  }
}
//FUNCTION AUTHORIZE
async function authorize(req, res, next) {
  if (!req.session.customerId) {
    return res.status(401).json({ message: "Du e inte AUTH" });
  }
  res.status(200).json(req.session);
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
//-middlewares
//-CLIENT- LOGIN FORM
//-Kolla listan TOdos
//-Lägga till fler productmodell(vallidering/exist)
//-Lägga till fler saker i customer modell
//FUNCTION AUTH

//DONE
//-cookie
//-OAuth/google?

//NEXT SPRINT
//-auth/autherize
//Ta bort console.log
//Lägga till bättre beskrivningar?
module.exports = { registerCustomer, loginCustomer, logoutCustomer, authorize };
