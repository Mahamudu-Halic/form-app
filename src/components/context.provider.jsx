import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../utils/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";



export const Context = createContext()

const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [userInfo, setUserInfo] = useState({
        displayName: "",
        email: "",
        photoURL: ""
    })
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

    const updateUserInfo = (data) => {
        setUserInfo(data)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            try {
                setCurrentUser(user)
            } catch (error) {
                
            }
        })

        return(
        () => {
            unsub()
        }
        )
    }, [])

    const contextValues = {
        theme,
        setTheme,
        isLight,
        setIsLight,
        changeTheme,
        currentUser,
        updateUserInfo,
        userInfo
    }


    return ( 
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
     );
}
 
export default ContextProvider;