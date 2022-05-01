import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  // let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/auth/login" />;
    // return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
};

export const AuthRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  // let location = useLocation();

  if (auth.user) {
    return <Navigate to="/" />;
    // return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
