"use client";
import React, { useState } from "react";
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

  const closeMobileDrawer = () => {
    setMenuOpen(!isMenuOpen);
  };
  const toogleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <div className="">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="modal-slide slide-in-left">
            <h4>Meny i mobil</h4>
            <button
              className="btn btn-outline-dark position-absolute top-0 end-0"
              onClick={closeMobileDrawer}
            >
              X
            </button>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link " href="/">
                  HEM <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/omoss">
                  OM OSS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/kontakt">
                  KONTAKTA OSS
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-outline-dark my-2 my-sm-0 "
                  onClick={openDrawer}
                >
                  BUTIK
                </button>

                {isDrawerOpen && (
                  <div className="modal-slide slide-in-left">
                    <div>
                      <button
                        className="btn btn-outline-dark position-absolute top-0 end-0 "
                        onClick={closeDrawer}
                      >
                        X
                      </button>
                      <h1 className="store-header">BUTIK</h1>

                      <div className="modal-body">
                        <div className="row">
                          <div className="row">
                            <div className="col-md-4">
                              {" "}
                              <Link
                                className="p-2 btn btn-outline-dark my-2 my-sm-0 btn-lg "
                                href="/butik"
                                onClick={closeDrawer}
                              >
                                ALLA PRODUKTER
                              </Link>
                              <ul>
                                <li className="p-2 g-col-6">
                                  <h4 className="store-header">Kategorier:</h4>
                                  <Categories closeDrawer={closeDrawer} />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <nav className="menu">
          <button
            className="navbar-toggler "
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
          {/* Utfälld meny- större skärmar*/}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  HEM <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/omoss">
                  OM OSS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/kontakt">
                  KONTAKTA OSS
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-outline-dark my-2 my-sm-0 "
                  onClick={openDrawer}
                >
                  BUTIK
                </button>
                {/* Meny (Butik) */}
                {isDrawerOpen && (
                  <div className="modal-slide slide-in-left">
                    <div>
                      <button
                        className="btn btn-outline-dark position-absolute top-0 end-0 "
                        onClick={closeDrawer}
                      >
                        X
                      </button>
                      <h1 className="text-center my-4">BUTIK</h1>
                      <hr />
                      <div className="modal-body">
                        <div className="container-fluid">
                          <div className="row">
                            <Link
                              className="p-2 btn btn-outline-dark my-2 my-sm-0 btn-lg "
                              href="/butik"
                              onClick={closeDrawer}
                            >
                              ALLA PRODUKTER
                            </Link>
                            <div className="p-2 g-col-6">
                              {" "}
                              <h4 className="text-center my-5">KATEGORIER:</h4>
                              <hr />
                              <ul>
                                <li
                                  className="p-2 btn-link btn-outline-dark my-2 my-sm-0 btn-lg "
                                  onClick={closeDrawer}
                                >
                                  <Categories onClick={closeDrawer} />
                                </li>
                              </ul>
                            </div>
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
