import { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();
export const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
    // console.log(currency);
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export const CryptoState = () => {
  return useContext(Crypto);
};
