import React, { useReducer, useContext } from "react";
import data from "./data";
const appContext = React.createContext();

function reducer(state, action) {
    // code 
}

function AppProvider({ children }) {
    const [products, dispatch] = useReducer(reducer, data);
    return <appContext.Provider
        value={{
            products,
        }}
    >
        {children}
    </appContext.Provider>
}

function useGlobalContext() {
    return useContext(appContext);
}

export { AppProvider, useGlobalContext }