import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";

export default function useAuth() {
    const authData = useContext(UserContext);

    const requestWrapper = (method, url, data, options = {}) => {
        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options.headers
            }
        };

        return request.baseRequest(method, url, data, authData.accessToken ? authOptions : options);
    };

    return {
        ...authData,
        userId: authData._id,
        isAuthenticated: !!authData.accessToken,
        request: {
            get: requestWrapper.bind(null, 'GET'),
            post: requestWrapper.bind(null, 'POST'),
            put: requestWrapper.bind(null, 'PUT'),
            delete: requestWrapper.bind(null, 'DELETE'),
        }
    }
};
