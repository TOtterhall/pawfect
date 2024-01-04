"use client";
import React, { useState } from "react";
import { useCustomerContext } from "../../../Context/customerContext/customerContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm() {
  const { isLoggedIn, login } = useCustomerContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventdefault();
    if (!isLoggedIn) {
      login();
      console.log("loggat in här");
    }
  };
  return (
    // form from bootstrap
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
