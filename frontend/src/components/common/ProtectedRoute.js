import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  // Check for authentication token
  const isAuthenticated = !!localStorage.getItem("refreshToken");
  
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/get-started/login" replace />;
  }
  
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute; 