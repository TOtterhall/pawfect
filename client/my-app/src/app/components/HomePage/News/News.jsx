`use client`;
import React from "react";
import Image from "next/image";
import Golden from "../../../../../public/assets/carousel/golden_dog.jpg";

import "./News.css";
export default function News() {
  return (
    <div>
      <div className="leker-kategorier"></div>
      <br />

      <h1 className="card-title news text-center">NYHETER</h1>
      <br />
      <br />

      <div className="card-group">
        <div className="card">
          <Image
            className="d-block w-100 img-fluid"
            src={Golden}
            alt="Golden Dog"
            width={200}
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <Image
            className="d-block w-100 img-fluid"
            src={Golden}
            alt="Golden Dog"
            width={200}
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <Image
            className="d-block w-100 img-fluid"
            src={Golden}
            alt="Golden Dog"
            width={200}
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
