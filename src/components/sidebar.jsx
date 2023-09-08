import "../styles/sidebar.css"
import { useContext } from "react";
import { Context } from "./context.provider";
const SideBar = () => {
    const {isLight} = useContext(Context)
    return ( 
        <div className="sidebar" style={isLight? {background: "#bbb"}: {background: "#2c2929"}}>
            <div className="items">
                <div className="home">
                    <button><i className="fa-solid fa-home"></i></button>
                </div>
                <div className="Courses">
                <button><i className="fa-solid fa-book"></i></button>
                </div>
                <div className="Upload">
                <button><i className="fa-solid fa-upload"></i></button>
                </div>
                <div className="Settings">
                <button><i className="fa-solid fa-gear"></i></button>
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;