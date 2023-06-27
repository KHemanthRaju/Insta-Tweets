import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export const RequireAuth = () => {
  const { authState } = useAuth();
  const location = useLocation();
  return authState.token ? (
    <Outlet />
  ) : (
    <Navigate to="/register" state={{ from: location }} replace />
  );
};
