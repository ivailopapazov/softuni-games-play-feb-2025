import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function AuthGuard() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
}
