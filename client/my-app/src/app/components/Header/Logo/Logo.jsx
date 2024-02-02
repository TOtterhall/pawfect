"useClient";
import React from "react";
import "./Logo.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Pawfect from "../../../../../public/assets/pictures/pawfect_logo.svg";

export default function Logo() {
  return (
    <div className="Logo">
      <Image
        className="d-block img-fluid"
        src={Pawfect}
        alt="LogoPawfect"
        width={200}
        height={100}
      />
    </div>
  );
}
