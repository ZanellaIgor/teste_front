import { createContext } from "react";
const initialState ={

}

export const ContextProvider = ({children}) => {
    return(
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}
