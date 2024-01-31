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
      <div className="jumbotron-page my-5 d-flex justify-content-center ">
        <div className="">
          <div className="">
            <div className="card-body">
              <h1 className="">WOW - ditt köp lyckades</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-4" />
              <br />
              <br />
              <br />
              <p>
                It uses utility classNamees for typography and spacing to space
                content out within the larger container. It uses utility
                classNamees for typography and spacing to space content out
                within the larger container. It uses utility classNamees for
                typography and spacing to space content out within the larger
                container. It uses utility classNamees for typography and
                spacing to space content out within the larger container. It
                uses utility classNamees for typography and spacing to space
                content out within the larger container. It uses utility
                classNamees for typography and spacing to space content out
                within the larger container. It uses utility classNamees for
                typography and spacing to space content out within the larger
                container. It uses utility classNamees for typography and
                spacing to space content out within the larger container. It
                uses utility classNamees for typography and spacing to space
                content out within the larger container. It uses utility
                classNamees for typography and spacing to space content out
                within the larger container. It uses utility classNamees for
                typography and spacing to space content out within the larger
                container. It uses utility classNamees for typography and
                spacing to space content out within the larger container. It
                uses utility classNamees for typography and spacing to space
                content out within the larger container. container. It uses
                utility classNamees for typography and spacing to space content
                out within the larger container. It uses utility classNamees for
                typography and spacing to space content out within the larger
                container. container. It uses utility classNamees for typography
                and spacing to space content out within the larger container. It
                uses utility classNamees for typography and spacing to space
                content out within the larger container.
              </p>
            </div>
          </div>
        </div>
      </div>

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
