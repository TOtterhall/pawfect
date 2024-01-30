"use client";
import { useEffect } from "react";
import { useCustomerContext } from "@/Context/customerContext/customerContext";
import { useCartContext } from "@/Context/cartContext/cartContext.jsx";
import { useOrderContext } from "@/Context/orderContext/orderContext.jsx";

export default function Orderconfirm() {
  const { auth } = useCustomerContext();
  const { cart } = useCartContext();
  const { createOrder } = useOrderContext();

  useEffect(() => {
    if (auth && cart != []) createOrder();
  }, [cart, auth]);
  // skapa useeffect med function i create order
  return (
    <div>
      <h1>WOW- DITT KÖP LYCKADES</h1>
      <h2>ORDERBEKRÄFTELSE</h2>
      <h3>Fortsätt handla- länka?</h3>

      {/* <ul>
        {allorders.map((order) => (
          <li key={order._id}>{order.customer}</li>
        ))}
      </ul> */}
    </div>
  );
}
{
  /* <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form> */
}
