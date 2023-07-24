import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const setInfoUser = (name) => {
    setUsername(name);
    localStorage.setItem("name-memory-game", JSON.stringify(name));
  };

  const getInfoUser = () => {
    const data = localStorage.getItem("name-memory-game");
    if (!!data && data.length > 0) setUsername(data);
  };

  return (
    <UserContext.Provider value={{ username, setInfoUser, getInfoUser }}>
      {children}
    </UserContext.Provider>
  );
};
