import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const admin = useSelector((state) => state.user.data.roleId);

  if (admin !== 200) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoutes;
