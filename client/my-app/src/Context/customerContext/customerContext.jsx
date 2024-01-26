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
  // const [auth, setAuth] = useState("");
  // const[customer ,setInloggedCustomer]=[false]
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
      const auth = await res.json();
      console.log(auth);
    } catch (error) {
      console.log("Kan inte hämta alla användarna.....", error);
    }
  };

  const getAllCustomers = async () => {
    try {
      const res = await fetch(`http://localhost:3080/api/customers/`);
      const customers = await res.json();
      setAllCustomers(customers);
    } catch (error) {
      console.log("Kan inte hämta alla användarna.....", error);
    }
  };

  const register = async ({ email, password }) => {
    const customerData = { email: email, password: password };
    console.log(customerData);

    try {
      const res = await fetch(`http://localhost:3080/api/customers/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      console.log(res);

      if (res.ok) {
        const data = await res.json();
        const { token } = data;
        setToken(token);
        console.log(token);

        localStorage.setItem("token", token);
        console.log("Ny kund registrerad");
        if (token) {
          setIsLoggedIn(true);
        }
      } else {
        console.log("Kan inte registrera dig, fel tassavtryck");
      }
    } catch (error) {
      console.error("Kan inte registrera DIG.....", error);
    }
  };

  //LOGIN
  const login = async ({ email, password }) => {
    const customerData = { email: email, password: password };
    console.log(customerData);
    //om kunden är registrerad => logga in denne.

    try {
      const res = await fetch(`http://localhost:3080/api/customers/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(customerData),
      });

      console.log(res);

      if (res.ok) {
        const data = await res.json();
        const { token } = data;
        setToken(token);
        console.log(token);

        localStorage.setItem("token", token);

        console.log("Token stored in localStorage:", token);
        console.log("inloggning lyckades från context");
      } else {
        console.log(
          "Kan inte logga in DU i context...Du måste registrera dig först"
        );
      }
    } catch (error) {
      console.error("Kan inte logga in DU.....", error);
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

      console.log(res);

      if (res.ok) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        console.log("Du är nu utloggad från context");
      } else {
        console.log(
          "Kan inte logga ut dig i context...Du måste registrera dig först"
        );
      }
    } catch (error) {
      console.error("Kan inte logga ut DU.....", error);
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
        // auth,
        // getAuth,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
