"use client"

import { ReactNode, useContext, useState } from "react";
import { GlobalContext } from "./createContext"

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [ searchHistory, setSearchHistory ] = useState<string[]>([])

    const AttemptAtSave = (params?: string | null) => {
        if (params && !searchHistory.includes(params)) {
            setSearchHistory(prev => [...prev, params]);
        }
    };

    return (
        <GlobalContext.Provider value={{ AttemptAtSave, searchHistory }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider")
    }

    return context;
}

export default useGlobalContext;