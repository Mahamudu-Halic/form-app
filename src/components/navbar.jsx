import Theme from "./theme";
import "../styles/navbar.css"
import { useContext } from "react";
import { Context } from "./context.provider";
import { UserButton } from "@clerk/clerk-react";
const Navbar = () => {
    const {isLight} = useContext(Context)

    return ( 
        <div className="navbar" style={isLight? {background: "#bbb"}: {background: "#2c2929"}}>
            <div className="brand">
                <h1>LearnHub</h1>
                
            </div>
            <div className="buttons">
                <Theme />
                <UserButton />
            </div>
        </div>
     );
}
 
export default Navbar;