"use Client";

import React from "react";
import "./Jumbotrons.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Golden from "../../../../../public/assets/carousel/golden_dog.jpg";
import Link from "next/link";
export default function InfoJumbo() {
  return (
    <div>
      <div className="jumbotron-about d-flex justify-content-center align-items-center">
        <div className="card-group">
          <div className="card-about">
            <div className="card-body">
              <h1 className="display-4">INFO...</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-4" />
              <p>
                It uses utility classNamees for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <Link className="nav-link btn-lg" href="/info">
                  INFO
                </Link>
              </p>
            </div>
          </div>
          <div className="card-about">
            <Image
              className="card-img-top"
              src={Golden}
              alt="Golden Dog"
              width={400}
              height={200}
              layout="responsive"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
