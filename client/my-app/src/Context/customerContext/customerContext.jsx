"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const CustomerContext = createContext();

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};

const CustomerContextProvider = ({ children }) => {
  const [customers, setAllCustomers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getAuth();
  }, []);

  const getAuth = async () => {
    try {
      const res = await fetch(`http://localhost:3080/api/customers/authorize`, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const authData = await res.json();
      if (authData.message == "Du e inte AUTH") {
        setAuth(false);
      }
      setAuth(authData);
    } catch (error) {
      error.message;
    }
  };

  const getAllCustomers = async () => {
    try {
      const res = await fetch(`http://localhost:3080/api/customers/`);
      const customers = await res.json();
      setAllCustomers(customers);
    } catch (error) {
      error.message;
    }
  };

  const register = async ({ email, password }) => {
    const customerData = { email: email, password: password };

    try {
      const res = await fetch(`http://localhost:3080/api/customers/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (res.ok) {
        const data = await res.json();
        const { token } = data;
        setAuth(data);
        setToken(token);

        alert("Du har nu registrerat dig- välkommen");
        setIsLoggedIn(true);
      } else {
        alert("Kan inte registrera dig, fel tassavtryck");
      }
    } catch (error) {
      error.message;
    }
  };

  //LOGIN
  const login = async ({ email, password }) => {
    const customerData = { email: email, password: password };

    try {
      const res = await fetch(`http://localhost:3080/api/customers/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(customerData),
      });

      if (res.ok) {
        const data = await res.json();
        const { token } = data;
        setToken(token);
        setAuth(data);
        localStorage.setItem("token", token);
        alert("Du lyckades logga in....YAYY");
      } else {
        alert("Kan inte logga in...Fel användarnamn eller lösenord");
      }
    } catch (error) {
      error.message;
    }
  };

  //LOGOUT
  const logout = async () => {
    try {
      const res = await fetch(`http://localhost:3080/api/customers/logout`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.ok) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        alert("Du har nu tassat ut");
      } else {
        alert("Du kan inte tassa ut innan du tassat in");
      }
    } catch (error) {
      error.message;
    }
  };

  return (
    <CustomerContext.Provider
      value={{
        getAllCustomers,
        customers,
        login,
        isLoggedIn,
        setIsLoggedIn,
        register,
        logout,
        token,
        auth,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
