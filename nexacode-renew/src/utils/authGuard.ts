// AuthGuard.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookieHelper from "./cookieHelper";

const AuthGuard = ({ children }: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = cookieHelper.getCookie("access_token");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return children;
};

export default AuthGuard;
