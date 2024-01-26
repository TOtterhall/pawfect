"use client";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Logout = () => {
  return (
    // form from bootstrap
    <div>
      <h3>DU MÅSTE REGISTRERA DIG FÖR ATT KUNNA SLUTFÖRA KÖPET:</h3>
      <button type="button" className="btn btn-primary">
        Logga ut
      </button>
    </div>
  );
};
export default Logout;
