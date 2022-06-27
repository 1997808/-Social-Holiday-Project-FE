import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }) => {
  // const auth = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  return !token ? <Navigate to="/auth/login" replace /> : children
}

export const AuthRoute = ({ children }) => {
  // const auth = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/" replace /> : children;
};

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
