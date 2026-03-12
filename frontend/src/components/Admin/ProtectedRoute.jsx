import { Navigate } from "react-router-dom";
import { getAdminSession } from "../../services/api";

const ProtectedRoute = ({ children }) => {
  const { token } = getAdminSession();
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
