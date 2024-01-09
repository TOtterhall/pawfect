"use Client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <div>
      {/* ändra färg på knapp sedan */}
      <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">
        <FontAwesomeIcon icon={faPaw} />
      </button>
    </div>
  );
}
