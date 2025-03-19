import { useState } from "react";

export default function usePersistedState(stateKey, initalState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(stateKey);
        if (!persistedState) {
            return typeof initalState === 'function' 
                ? initalState() 
                : initalState;
        }

        const persistedStateData = JSON.parse(persistedState);

        return persistedStateData;
    });

    const setPersistedState = (input) => {
        const data = typeof input === 'function' 
            ? input(state) 
            : input;

        const persistedData = JSON.stringify(data);

        localStorage.setItem(stateKey, persistedData);

        setState(data);
    };

    return [
        state,
        setPersistedState,
    ]
}
