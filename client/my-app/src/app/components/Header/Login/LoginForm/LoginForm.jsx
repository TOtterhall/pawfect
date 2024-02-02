"use client";
import React, { useState } from "react";
import { useCustomerContext } from "../../../../../Context/customerContext/customerContext";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const { register, login, logout } = useCustomerContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // GET CUSTOMER EMAIL
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // GET CUSTOMER PASSWORD
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //REGISTER CUSTOMER
  const handleRegister = async (e) => {
    e.preventDefault();

    await register({ email, password });
  };

  //LOGGAIN CUSTOMER
  const handleLogin = async (e) => {
    e.preventDefault();

    await login({ email, password });
  };

  //LOGGOUT CUSTOMER
  const handleLogout = async (e) => {
    e.preventDefault();

    await logout();
  };

  return (
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
          Använd din e-postadress som användarnamn
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Lösenord</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <br />

      <button
        type="button"
        className="btn btn-outline-dark my-2 my-sm-0 "
        onClick={handleLogin}
      >
        LOGGA IN
      </button>
      <button
        type="button"
        className="btn btn-outline-dark my-2 my-sm-0 "
        onClick={handleRegister}
      >
        REGISTRERA
      </button>
      <button
        type="button"
        className="btn btn-outline-dark my-2 my-sm-0 "
        onClick={handleLogout}
      >
        LOGGA UT
      </button>
    </form>
  );
};
export default LoginForm;
