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

  return (
    <div>
      <div className="jumbotron-page my-5 d-flex justify-content-center ">
        <div className="">
          <div className="card">
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
    </div>
  );
}
