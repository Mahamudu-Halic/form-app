import { useContext } from "react";
import { useState } from "react";
import "../styles/theme.css"
import { Context } from "./context.provider";

const Theme = () => {
    const [isActive, setIsActive] = useState(false)
    const {isLight, changeTheme} = useContext(Context)

    const handleClick = bool => {
        changeTheme(bool)
        setIsActive(!isActive)
    }

    return ( 
        <div className="theme">
            <button className="menu" onClick={() => setIsActive(!isActive)}>
                <i class={`fa-regular ${isLight ? "fa-sun" : "fa-moon"}`}></i>
                {/* <i className="fa-solid fa-circle-half-stroke"></i> */}
            </button>
           { isActive && 
           <div className="select">
                
                <button 
                    onClick={() => handleClick(true)}
                >light</button>
                <button onClick={() => handleClick(false)}>dark</button>
            </div>}
        </div>
     );
}
 
export default Theme;