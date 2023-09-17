import { useState } from "react";
import "../styles/sidebar.css"
import { NavLink } from "react-router-dom";
const SideBar = () => {
    const [active, setIsActive] = useState(false)

    const handleActive = () => {
        setIsActive(!active)
    }
    return ( 
        <div className="sidebar">
            <div className="hamburger" onClick={handleActive}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className={`items ${active && "active"}`}>
                <div className="home">
                    <NavLink to="/">
                        <button><i className="fa-solid fa-home"></i></button>
                    </NavLink>
                </div>
                <div className="Courses">
                    <NavLink to="/courses">
                        <button><i className="fa-solid fa-book"></i></button>
                    </NavLink>
                </div>
                <div className="Upload">
                    <NavLink to="/upload">
                        <button><i className="fa-solid fa-upload"></i></button>
                    </NavLink>
                </div>
                <div className="Chat">
                    <NavLink to="chat">
                        <button><i className="fa-regular fa-message"></i></button>
                    </NavLink>
                </div>
                <div className="video">
                    <NavLink to="video-chat">
                        <button><i className="fa-solid fa-video"></i></button>
                    </NavLink>
                </div>
                <div className="contact">
                    <NavLink to="contact">
                        <button><i className="fa-solid fa-headset"></i></button>
                    </NavLink>
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;