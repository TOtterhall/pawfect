"use Client";

import React from "react";
import "./Jumbotrons.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Golden from "../../../../../public/assets/carousel/golden_dog.jpg";
import Link from "next/link";
export default function StoreJumbo() {
  return (
    <div>
      <div className="jumbotron-store">
        <Link className="nav-link btn-lg" href="/butik">
          <div className="card bg-dark text-white">
            <Image
              className="d-block w-100 img-fluid"
              src={Golden}
              alt="Golden Dog"
              width={400}
              height={200}
            />
            <div className="card-img-overlay card-to-shop">
              <h5 className="card-title text-center">
                DAX ATT VÅRSHOPPA TILLL VOVVEN
              </h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
