"use Client";

import React from "react";
import "./Jumbotrons.css";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Sociala from "../../../../../public/assets/pictures/sociala.svg";

export default function SocialJumbo() {
  return (
    <div>
      <div className="jumbotron-social">
        <br />
        <Link className="nav-link btn-lg" href="/social">
          <h4 className="display-4 text-center">SOCIALA MEDIER</h4>
          <br />
          <Image
            className="socialicons"
            src={Sociala}
            alt="socialicons"
            width={400}
            height={200}
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
          />

          <hr className="my-4" />
          <br />
          <br />
        </Link>
      </div>
    </div>
  );
}
