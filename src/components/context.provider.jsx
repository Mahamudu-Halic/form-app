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
                background: "#e9e3e3"
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


    //course list
    const courseList = [
        //college of sciene
        ['computer science', 'mathematics', 'chemistry', 'physics', 'theoritical and applied biology', 'environmental science'],

        //college of engineering
        [ 'electrical engineering', 'mechanical engineering', 'telecommunication engineering', 'material engineering', 'computer engineering', 'aerospace engineering'],

        //college of humanity and social sciences
        [ 'commercial law', 'private law', 'public law', 'economics', 'services management', 'social work and sociology', 'logistics and supply chain management', 'accounting and finance', ],

        //college of art and built environment
        ['architecture', 'industrial art', 'painting and sculpture', 'planning', 'communication design',],

        //college of health science
        ['anatomy', 'herbal medicine', 'nursing', 'medicine', 'pharmaceutics'],

        //college of agriculture and natural resources
        ['animal science', 'crop science', 'agroforestry', 'social forestery', 'soil science']
    ]


    const contextValues = {
        theme,
        setTheme,
        isLight,
        setIsLight,
        changeTheme,
        courseList
    }


    return ( 
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
     );
}
 
export default ContextProvider;