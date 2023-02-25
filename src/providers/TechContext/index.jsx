import { createContext, useState } from "react";

export const TechContext = createContext();

export const TechContextProvider = ({ children }) => {
  const [modalOn, setModalOn] = useState({ add: "", update: "" });
  const token = localStorage.getItem("@TOKEN");

  return (
    <TechContext.Provider value={{ modalOn, setModalOn, token }}>
      {children}
    </TechContext.Provider>
  );
};
