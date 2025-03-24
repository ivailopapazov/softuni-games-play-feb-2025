import { useCallback, useContext, useMemo } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";

export default function useAuth() {
    const { accessToken, ...authData } = useContext(UserContext);

    const requestWrapper = useCallback((method, url, data, options = {}) => {
        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': accessToken,
                ...options.headers
            }
        };

        return request.baseRequest(method, url, data, accessToken ? authOptions : options);
    }, [accessToken]);

    const requestObject = useMemo(() => ({
        get: requestWrapper.bind(null, 'GET'),
        post: requestWrapper.bind(null, 'POST'),
        put: requestWrapper.bind(null, 'PUT'),
        delete: requestWrapper.bind(null, 'DELETE'),
    }), [requestWrapper])

    return {
        ...authData,
        accessToken,
        userId: authData._id,
        isAuthenticated: !!accessToken,
        request: requestObject,
    }
};
