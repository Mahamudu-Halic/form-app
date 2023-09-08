import { useContext } from "react";
import { useState } from "react";
import "../styles/theme.css"
import { Context } from "./context.provider";

const Theme = () => {
    const [isActive, setIsActive] = useState(false)
    const {isLight, changeTheme} = useContext(Context)
    console.log(isLight)

    const handleClick = bool => {
        changeTheme(bool)
        setIsActive(!isActive)
    }

    return ( 
        <div className="theme">
            <button className="menu" onClick={() => setIsActive(!isActive)}>
                {/* <i class="fa-solid fa-ellipsis-vertical"></i> */}
                <i class="fa-regular fa-moon"></i>
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