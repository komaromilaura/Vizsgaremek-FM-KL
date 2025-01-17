import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../Context/AuthContext";

const AuthLayout = () => {
    const { user } = useAuthContext();

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default AuthLayout;