import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Menu() {
  return (
    <div>
      <div className="dropdown show">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="/"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h4 className="text-white">Collapsed content</h4>
              <span className="text-muted">
                Toggleable via the navbar brand.
              </span>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            {/* den ljusa byt ut klassnamn på nav navbar navbar-expand-lg navbar-light bg-light */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
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
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
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
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
