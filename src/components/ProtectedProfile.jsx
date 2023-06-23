import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedProfile = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedProfile;
