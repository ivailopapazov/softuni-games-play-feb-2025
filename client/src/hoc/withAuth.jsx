import useAuth from "../hooks/useAuth";

export default function withAuth(Component) {
    const WrapperComponent = (props) => {
        const authContext = useAuth();

        return <Component {...props} auth={authContext} />
    }

    return WrapperComponent;
}
