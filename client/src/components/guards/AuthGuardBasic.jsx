import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function AuthGuard({
    children,
}) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <>
            {children}
        </>
    );
}
