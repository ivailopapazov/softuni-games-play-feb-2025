import { useEffect, useRef } from "react";
import request from "../utils/request"

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = async (email, password) => {
        const result = await request.post(
            `${baseUrl}/login`,
            { email, password },
            { signal: abortRef.current.signal }
        );

        return result;
    }

    useEffect(() => {
        const abortController = abortRef.current;

        return () => abortController.abort();
    }, []);

    return {
        login,
    }
} 
