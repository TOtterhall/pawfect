"use Client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "../LoginForm/LoginForm";

export default function Login() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      {/* ändra färg på knapp sedan */}
      <button
        className="btn btn-outline-success my-2 my-sm-0 "
        onClick={openDrawer}
      >
        <FontAwesomeIcon icon={faPaw} />
      </button>

      {/* Drawer */}
      {isDrawerOpen && (
        <div>
          <div>
            <p>MIN LOGINFORM</p>
            <LoginForm />
          </div>
          <button
            className="btn btn-outline-success my-2 my-sm-0 "
            onClick={closeDrawer}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </>
  );
}
