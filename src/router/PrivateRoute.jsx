import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { username } = useContext(UserContext);

  return username.length > 0 ? children : <Navigate to="/" />;
};
