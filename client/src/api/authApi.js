// import { useEffect, useRef } from "react";
import request from "../utils/request"

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    // const abortRef = useRef(new AbortController());

    const login = async (email, password) =>
        request.post(
            `${baseUrl}/login`,
            { email, password },
            // { signal: abortRef.current.signal }
        );

    // useEffect(() => {
    //     const abortController = abortRef.current;

    //     return () => abortController.abort();
    // }, []);

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (email, password) => 
        request.post(`${baseUrl}/register`, { email, password });

    return {
        register,
    }
}
