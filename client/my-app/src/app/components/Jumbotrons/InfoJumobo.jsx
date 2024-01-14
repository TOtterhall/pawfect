"use Client";

import React from "react";
import "./Jumbotrons.css";
import Link from "next/link";
export default function InfoJumbo() {
  return (
    <div>
      <div className="jumbotron-Info">
        <h1 className="display-4">Info...</h1>
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
          <a className="btn btn-primary btn-lg" href="#" role="button">
            <Link className="nav-link" href="/info">
              Info
            </Link>
          </a>
        </p>
      </div>
    </div>
  );
}