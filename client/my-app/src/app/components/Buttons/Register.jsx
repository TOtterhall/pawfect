"use client";
import React, { useState } from "react";
import { useCustomerContext } from "../../../Context/customerContext/customerContext";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterForm = () => {
  const { register } = useCustomerContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TA EMOT EMAIL FRÅN FORMULÄRET
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // TA EMOT LÖSENORD FRÅN FORMULÄRET
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //REGISTRERA ANVÄNDAREN
  const handleRegister = async (e) => {
    e.preventDefault();

    await register({ email, password });
  };

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
          value={email}
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
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
      <h3>DU MÅSTE REGISTRERA DIG FÖR ATT KUNNA SLUTFÖRA KÖPET:</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleRegister}
      >
        REGISTRERA DIG
      </button>
    </form>
  );
};
export default RegisterForm;
