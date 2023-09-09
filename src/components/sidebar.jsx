import "../styles/sidebar.css"
import { useContext } from "react";
import { Context } from "./context.provider";
import { NavLink } from "react-router-dom";
const SideBar = () => {
    const {isLight} = useContext(Context)
    return ( 
        <div className="sidebar">
            <div className="items">
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
                <div className="Settings">
                    <NavLink to="settings">

                <button><i className="fa-solid fa-gear"></i></button>
                    </NavLink>
                </div>
                <div className="Chat">
                    <NavLink to="chat">
                        <button><i className="fa-regular fa-message"></i></button>
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