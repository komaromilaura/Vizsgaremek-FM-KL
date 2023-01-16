import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../Context/AuthContext";

const GuestLayout = () => {
    const { user } = useAuthContext();

    return !user ? <Outlet /> : <Navigate to="/partner" />
};

export default GuestLayout;