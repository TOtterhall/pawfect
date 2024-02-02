"use Client";

import React from "react";
import "../Jumbotrons/Jumbotrons.css";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";

export default function SocialJumbo() {
  return (
    <div>
      <div className="jumbotron-news">
        <br />
        <Link className="nav-link btn-lg" href="/social">
          <br />
          <br />
          <h4 className="display-4 text-center">NYHETSBREV</h4>
          <br />
          <div className="row justify-content-center">
            <form className="col-sm-6">
              <div className="form-group mb-2">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="E-post adress"
                />
              </div>
              <button type="submit" className="btn btn-outline-dark mb-2">
                PRENUMERERA
              </button>
            </form>
          </div>
          <br />
          <br />
          <hr className="my-4" />
          <br />
          <br />
        </Link>
      </div>
    </div>
  );
}
