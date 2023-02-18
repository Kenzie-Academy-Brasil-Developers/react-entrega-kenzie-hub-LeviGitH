import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", module: "", techs: [] });
  const [tech, setTech] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, tech, setTech }}>
      {children}
    </UserContext.Provider>
  );
};
