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

  const login = async ({ email, password }) => {
    const customerData = { email: email, password: password };
    console.log(customerData);

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
        console.log("Kan inte logga in DU i context.....");
      }
    } catch (error) {
      console.error("Kan inte logga in DU.....", error);
    }
  };

  // andra funktioner och useEffect

  return (
    <CustomerContext.Provider
      value={{
        getAllCustomers,
        customers,
        login,
        isLoggedIn,
        setIsLoggedIn,

        // andra värden/funktioner
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
