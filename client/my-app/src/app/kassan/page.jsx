"use client";
import React from "react";
import CheckOutBtn from "../components/Buttons/CheckOutBtn";
import Link from "next/link";
import RegisterForm from "../components/Buttons/Register";
import { useCartContext } from "@/Context/cartContext/cartContext";
import { useCustomerContext } from "@/Context/customerContext/customerContext";
import LoginForm from "../components/Header/Login/LoginForm/LoginForm";
//FIXA IORDNING VAD SOM SKA VARA MED I KASSAN!!!!!!!!
//BARA INLOGGADE ANVÄNDARE????
//INLOGGADE ANVÄNDARE SKA KUNNA SE SINA ORDRAR JÖ!!!
export default function checkout() {
  const { cart } = useCartContext();
  const { auth } = useCustomerContext();
  console.log("Cart in Checkout:", auth);

  return (
    <div className="mb-5">
      <h1 className="my-5  text-center">KASSAN</h1>

      <div className="container">
        <div className="row">
          <Link
            className="p-2 btn btn-outline-dark my-2 my-sm-0 btn-lg "
            href="/butik"
          >
            FORTSÄTT SHOPPA
          </Link>

          {/* <h1>FORTSÄTT SHOPPA</h1>
          <div>Din beställning</div> */}
          {cart.map((cartItem) => (
            <div
              className="col-xs-12 col-md-6 col-lg-2 my-5"
              key={cartItem.product._id}
            >
              <div className="card mb-6">
                <img
                  src={cartItem.product.image}
                  alt={cartItem.product.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{cartItem.product.title}</h5>
                  <p className="card-text">
                    Price: {cartItem.product.price} SEK
                  </p>
                  <p className="card-text">Quantity: {cartItem.quantity} ST</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>{auth ? <CheckOutBtn /> : <LoginForm />}</div>
      </div>
    </div>
  );
}

// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//  `pk_test_51ObgWZB4OKIOfmBbp4HuOGz818qIcEtz5AQkd11AIsY7HPqZPR96QacXX6auyEqYhW2q9NPNZrT0395oTkrBx94h00U0G27s4y`
// );
// export default function PreviewPage() {
//   React.useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);
//     if (query.get("success")) {
//       console.log("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       console.log(
//         "Order canceled -- continue to shop around and checkout when you’re ready."
//       );
//     }
//   }, []);

//   return (
//     <form action="/api/checkout_sessions" method="POST">
//       <section>
//         <button type="submit" role="link">
//           Checkout
//         </button>
//       </section>
//       <style jsx>
//         {`
//           section {
//             background: #ffffff;
//             display: flex;
//             flex-direction: column;
//             width: 400px;
//             height: 112px;
//             border-radius: 6px;
//             justify-content: space-between;
//           }
//           button {
//             height: 36px;
//             background: #556cd6;
//             border-radius: 4px;
//             color: white;
//             border: 0;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s ease;
//             box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
//           }
//           button:hover {
//             opacity: 0.8;
//           }
//         `}
//       </style>
//     </form>
//   );
// }
