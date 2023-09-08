import { useState } from "react";
import { createContext } from "react";


export const Context = createContext()

const ContextProvider = ({children}) => {
    const [isLight, setIsLight] = useState(false)
    const [theme, setTheme] = useState(
        {
            light: {
                color: "#121212",
                background: "#fff"
            },
            dark: {
                color: "#fff",
                background: "#121212"
            }
        }
    )

    const changeTheme = bool => {
        setIsLight(bool)
    }

    const contextValues = {
        theme,
        setTheme,
        isLight,
        setIsLight,
        changeTheme
    }
    return ( 
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
     );
}
 
export default ContextProvider;