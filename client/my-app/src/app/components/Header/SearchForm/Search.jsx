"use Client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchForm from "./SearchForm/SearchForm";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Search.css";

export default function Search() {
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
        className="btn btn-outline-dark my-2 my-sm-0"
        onClick={openDrawer}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      {/* SAMMA STYLING SOM LOGIN ändra om tid */}
      {/* Drawer */}
      {isDrawerOpen && (
        <div>
          <div className="login-form-container">
            <button
              className="btn btn-outline-dark position-absolute top-0 end-0  "
              onClick={closeDrawer}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h4 className="login-header">SÖK</h4>
            <SearchForm />
          </div>
        </div>
      )}
    </>
  );
}
