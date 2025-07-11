import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Example: check for a token in localStorage (customize as needed)
  const isAuthenticated = !!localStorage.getItem("refreshToken");
  return isAuthenticated ? children : <Navigate to="/get-started/login" />;
};

export default ProtectedRoute;
