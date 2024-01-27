"use Client";

import React from "react";
import "./Jumbotrons.css";
import Link from "next/link";
export default function StoreJumbo() {
  return (
    <div>
      <div className="jumbotron-store">
        <h1 className="display-4">Till butiken...</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>

        <p className="lead">
          <Link className="nav-link btn-lg" href="/butik">
            Till butiken
          </Link>
        </p>
      </div>
    </div>
  );
}
