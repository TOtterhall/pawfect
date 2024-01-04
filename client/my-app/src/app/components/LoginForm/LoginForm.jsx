"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm() {
  return (
    // form from bootstrap
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      {/* skapa en annan knapp so komponent sedan? */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

// Notes to myself
// <label className="form-check-label" htmlFor="exampleCheck1">
// var for innan men enligt stckowerflow borde det vara htmlFor,stämmer?
//stackoverflow.com/questions/59924585/im-getting-an-error-using-react-invalid-dom-property-for-did-you-mean-htm
// <label className="form-check-label" for="exampleCheck1">
