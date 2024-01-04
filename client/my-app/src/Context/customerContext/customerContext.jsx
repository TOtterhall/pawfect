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
      console.error("Kan inte hämta alla användarna.....", error);
    }
  };

  const login = async (email, password) => {
    const customer = { email, password };
    try {
      const res = await fetch(`http://localhost:3080/api/customers/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });
      if (res.ok) {
        setIsLoggedIn(true);
        console.log("inloggning lyckades från context");
      } else {
        console.error("Kan inte logga in DU i context.....", error);
      }
      // const data = await res.json(data);
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
