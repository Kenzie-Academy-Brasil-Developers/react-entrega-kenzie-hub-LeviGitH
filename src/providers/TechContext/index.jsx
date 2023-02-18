import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext();

export const TechContextProvider = ({ children }) => {
  const [modalOn, setModalOn] = useState({ add: "", update: "" });
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  return (
    <TechContext.Provider value={{ modalOn, setModalOn, navigate, token }}>
      {children}
    </TechContext.Provider>
  );
};
