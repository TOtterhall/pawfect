import { useState, createContext, useContext } from "react";

export const CustomerContext = createContext();

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};

const CustomerContextProvider = ({ children }) => {
  const [customers, setAllCustomers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        setIsLoggedIn(true);
        console.log("Ny kund registrerad");
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
        body: JSON.stringify(customerData),
      });

      console.log(res);

      if (res.ok) {
        setIsLoggedIn(true);
        console.log("inloggning lyckades från context");
      } else {
        register();
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
      });

      console.log(res);

      if (res.ok) {
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
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
