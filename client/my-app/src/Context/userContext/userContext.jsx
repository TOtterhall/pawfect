import { useState, createContext, useContext } from "react";

export const CustomerContext = createContext();

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};

const CustomerContextProvider = ({ children }) => {
  const [customers, setAllCustomers] = useState([]);

  const getAllCustomers = async () => {
    const res = await fetch(`http://localhost:3080/api/customers/`);
    const customers = await res.json();
    setAllCustomers(customers);
  };

  // andra funktioner och useEffect

  return (
    <CustomerContext.Provider
      value={{
        getAllCustomers,
        customers,
        // andra värden/funktioner
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
