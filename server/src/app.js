require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const { errorHandler } = require("./error");
const { productRouter } = require("./resources/product/product.router");
const { customerRouter } = require("./resources/customer/customer.router");
const { categoryRouter } = require("./resources/category/category.router");
const { orderRouter } = require("./resources/order/order.router");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cookieParser = require("cookie-parser");
//Also need to add errorhandler

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["My0Very1S3cr3tKey8"],
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: "strict",
    httpOnly: true,
    secure: false,
  })
);

const CLIENT_URL = "http://localhost:3000";
//POST
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { cart } = req.body;
    const customerId = req.session.customerId;
    //KOLLA MER PÅ VAD JAG VILL SKICKA MED && RADE KASSAN VID SLUTFÖRT KÖP
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: cart.map((cartItem) => {
        return {
          price_data: {
            currency: "sek",
            product_data: {
              name: cartItem.product.title,
            },
            unit_amount: cartItem.product.price * 100,
          },
          quantity: cartItem.quantity,
        };
      }),
      mode: "payment",
      //Skapa en sida /confirm
      success_url: `${CLIENT_URL}/orderbekraftelse`,

      cancel_url: `${CLIENT_URL}/misslyckadbetalning`,
    });
    //vad ??? tillbaka sessionen ex sessionsobj..fyll på?

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.log(error.message);
    res.status(400).json("det gick inte alls bra det här du...");
  }
});
// app.get("/order/success", async (req, res) => {
//   const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
//   const customer = await stripe.customers.retrieve(session.customer);

//   res.send(
//     `<html><body><h1>Thanks for your order, ${customer.email}!</h1></body></html>`
//   );
// });
//Routes

app.use("/api", productRouter);
app.use("/api", customerRouter);
app.use("/api", categoryRouter);
app.use("/api", orderRouter);
app.use((req, res) => {
  console.log("!404!");
  res.status(404).json("missing resource");
});
app.use(errorHandler);
module.exports = { app };
