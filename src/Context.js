import React, { useReducer, useContext } from "react";
import data from "./data";
const appContext = React.createContext();

export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    REMOVE: 'remove',
    REMOVE_ALL: 'remove_all'
}

function reducer(products, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return products.map(product => {
                return product.id === action.payload.id ?
                    { ...product, amount: product.amount + 1 }
                    :
                    product
            })
        case ACTIONS.DECREMENT:
            return products.map(product => {
                return product.id === action.payload.id ?
                    { ...product, amount: product.amount - 1 }
                    :
                    product
            })
        case ACTIONS.REMOVE:
            return products.filter(product => product.id !== action.payload.id)
        case ACTIONS.REMOVE_ALL:
            return []
        default:
            return products;
    }
}

function AppProvider({ children }) {
    const [products, dispatch] = useReducer(reducer, data);
    return <appContext.Provider
        value={{
            products,
            dispatch
        }}
    >
        {children}
    </appContext.Provider>
}

function useGlobalContext() {
    return useContext(appContext);
}

export { AppProvider, useGlobalContext }