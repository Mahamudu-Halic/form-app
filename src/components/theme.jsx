import { useContext } from "react";
import { useState } from "react";
import "../styles/theme.css"
import { Context } from "./context.provider";

const Theme = () => {
    const [isActive, setIsActive] = useState(false)
    const {isLight, changeTheme} = useContext(Context)

    const handleClick = () => {
        changeTheme(!isActive)
        setIsActive(!isActive)
    }

    return ( 
        <div className="theme">
            <button className="menu" onClick={handleClick}>
                <i class={`fa-regular ${isLight ? "fa-sun" : "fa-moon"}`}></i>
                {isLight ? "Light" : "Dark"}
            </button>
        </div>
    );
}
 
export default Theme;