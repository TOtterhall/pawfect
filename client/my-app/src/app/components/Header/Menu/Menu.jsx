"use client";

import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toogleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className={`pos-f-t ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Meny</h4>

            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link  text-white" href="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" href="/butik">
                  Butik
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" href="/omoss">
                  Om oss
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" href="/kontakt">
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          {/* den ljusa byt ut klassnamn på nav navbar navbar-expand-lg navbar-light bg-light */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded={isMenuOpen ? "true" : false}
            aria-label="Toggle navigation"
            onClick={toogleMenu}
          >
            {isMenuOpen ? (
              <span>
                <FontAwesomeIcon icon={faXmark} />
              </span>
            ) : (
              <span className="navbar-toggler-icon "></span>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <a classNameName="navbar-brand" href="/">
            Home
          </a> */}
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/butik">
                  Butik
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/omoss">
                  Om oss
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/kontakt">
                  Kontakta oss
                </Link>
              </li>

              {/* <li classNameName="nav-item">
              <a classNameName="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
