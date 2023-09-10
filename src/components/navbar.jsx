import Theme from "./theme";
import "../styles/navbar.css"
import { useContext, useState } from "react";
import { Context } from "./context.provider";
import { SignOut } from "../utils/firebase.utils";
const Navbar = () => {
    const [show, setShow] = useState(false)
    const {userInfo} = useContext(Context)
    const handleSignOut = () => {
        SignOut()
    }
    const {isLight} = useContext(Context)

    const showOptions = () =>{
        setShow(!show)
    }
    return ( 
        <div className="navbar" style={isLight? {background: "#bbb"}: {background: "#2c2929"}}>
            <div className="brand">
                <h1>LearnHub</h1>
                
            </div>
            <div className="buttons">
                    <Theme />
                <div className="profile" onClick={showOptions}>
                    <img src={userInfo.photoURL} alt="" />
                    {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocL2utyLo1bV7326X5E-nYDWCvtYW-hk-y5TSH82FPjydCA=s96-c" alt="" /> */}
                </div>
                {
                    show &&
                    <div className="options">
                        <div className="account"> 
                            <div className="account-img">
                                <img src={userInfo.photoURL} alt="profile" />
                            </div>
                            <div className="info">
                                <p>{userInfo.displayName}</p>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                        <button className="logout" onClick={handleSignOut}><i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</button>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default Navbar;