import Theme from "./theme";
import "../styles/navbar.css"
import { useContext } from "react";
import { Context } from "./context.provider";
const Navbar = () => {
    const {isLight} = useContext(Context)
    return ( 
        <div className="navbar" style={isLight? {background: "#bbb"}: {background: "#2c2929"}}>
            <div className="brand">
                <h1>LearnHub</h1>
            </div>
            <div className="buttons">
                <button className="logout"><i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</button>
                <Theme />
            </div>
        </div>
     );
}
 
export default Navbar;