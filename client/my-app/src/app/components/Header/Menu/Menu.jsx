"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Categories from "../../Categories/Categories";
import "./Menu.css";
const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
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
                  Hem <span className="sr-only">(current)</span>
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
              <li>
                <button
                  className="btn btn-outline-success my-2 my-sm-0 "
                  onClick={openDrawer}
                >
                  open
                </button>
                {isDrawerOpen && (
                  <div className="modal-slide slide-in-left">
                    <div>
                      <button
                        className="btn btn-outline-success position-absolute top-0 end-0 "
                        onClick={closeDrawer}
                      >
                        X
                      </button>
                      <h1>BUTIK</h1>
                      <div className="modal-body">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="p-2 g-col-6">
                              {" "}
                              <li className="p-2 g-col-6">
                                <Categories />
                              </li>
                            </div>
                          </div>
                          <div clasName=" card p-2 g-col-6">
                            <div className="p-2 g-col-6">Bild 1</div>
                            <div>Bild 2</div>
                            <div>Bild 3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Menu;
