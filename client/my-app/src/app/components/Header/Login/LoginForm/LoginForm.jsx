"use client";
import React, { useEffect, useState } from "react";
import { useCustomerContext } from "../../../../../Context/customerContext/customerContext";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const { register, login, isLoggedIn, logout } = useCustomerContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toogleBtn, setToogleBtn] = useState("");

  //FÖR ATT ÄNDRA PÅ KNAPPTEXT BEROENDE PÅ OM KUND ÄR I LOGGAD ELLER INTE
  useEffect(() => {
    setToogleBtn(isLoggedIn ? "Logout" : "Login");
  }, [isLoggedIn]);

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

  //LOGGAIN ANVÄNDAREN
  const handleLogin = async (e) => {
    e.preventDefault();

    await login({ email, password });
    setToogleBtn("Logout");
  };

  //LOGGAUT ANVÄNDAREN
  const handleLogout = async (e) => {
    e.preventDefault();

    await logout();
    setToogleBtn("Login");
  };

  const handleToogleBtn = isLoggedIn ? handleLogout : handleLogin;

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

      {/* skapa en annan knapp so komponent sedan? */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleToogleBtn}
      >
        {toogleBtn}
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleRegister}
      >
        Registrera
      </button>
      <button type="button" className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
      <p></p>
    </form>
  );
};
export default LoginForm;
// Notes to myself
//Setcookie?-logga ut sesson._id
// <label className="form-check-label" htmlFor="exampleCheck1">
// var for innan men enligt stckowerflow borde det vara htmlFor,stämmer?
//stackoverflow.com/questions/59924585/im-getting-an-error-using-react-invalid-dom-property-for-did-you-mean-htm
// <label className="form-check-label" for="exampleCheck1">
