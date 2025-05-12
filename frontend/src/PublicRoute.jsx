import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return !isLogin ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
