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
  const toogleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //Kolla om jag ska bryta ner...?
  return (
    <div className="menu">
      <div className={`pos-f-t ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Meny</h4>

            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link text-white" href="/">
                  HEM <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link  text-white" href="/butik">
                  BUTIK
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" href="/omoss">
                  OM OSS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" href="/kontakt">
                  KONTAKTA OSS
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-outline-success my-2 my-sm-0 "
                  onClick={openDrawer}
                >
                  BUTIK
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
                      <h1 className="store-header">BUTIK</h1>

                      <div className="modal-body">
                        <div className="row">
                          <div className="row">
                            <div className="col-md-4">
                              {" "}
                              <ul>
                                <li className="p-2 g-col-6">
                                  <h4 className="store-header">Kategorier:</h4>
                                  <Categories closeDrawer={closeDrawer} />
                                </li>
                              </ul>
                              <div className="container-pictures">
                                <div className="row">
                                  <div className="mb-3">
                                    <div className="card-body">
                                      <div className="card-body">
                                        Bild 1 om tid?
                                      </div>
                                      <div className="card">Bild 2</div>
                                      <div className="card">Bild 3</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
        <nav className="">
          {/* den ljusa byt ut klassnamn på nav navbar navbar-expand-lg navbar-light bg-light */}
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
          {/* Utfälld meny */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  HEM <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/butik">
                  BUTIK
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
                  className="btn btn-outline-success my-2 my-sm-0 "
                  onClick={openDrawer}
                >
                  BUTIK
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
                              <ul>
                                <li
                                  className="p-2 g-col-6"
                                  onClick={closeDrawer}
                                >
                                  <h4>Kategorier:</h4>
                                  <Categories onClick={closeDrawer} />
                                </li>

                                <Link
                                  className="nav-link"
                                  href="/butik"
                                  onClick={closeDrawer}
                                >
                                  <h4>ALLA PRODUKTER</h4>
                                </Link>
                              </ul>
                              <div className=" card p-2 g-col-6">
                                <div className="">Bild 1</div>
                                <div>Bild 2</div>
                                <div>Bild 3</div>
                              </div>
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
