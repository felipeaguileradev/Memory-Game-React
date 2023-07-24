import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Board, Home } from "../components";
import { UserContext } from "../context/UserContext";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const { getInfoUser } = useContext(UserContext);

  useEffect(() => {
    getInfoUser();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Board />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
