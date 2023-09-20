import "../styles/sign.css"
import Theme from "./theme";
import { SignInWithGooglePopUp, createUserDatabase, SignInWithGithubPopUp, SignInWithFacebookPopUp } from "../utils/firebase.utils";
import { useContext } from "react";
import { Context } from "./context.provider";

const Sign = ({children}) => {
    const {updateUserInfo} = useContext(Context)
    const handleGoogleClick = async () => {
        const {user} = await SignInWithGooglePopUp()
        const data = await createUserDatabase(user)
        updateUserInfo(data)
    }

    const handleGithubClick = async () => {
        const {user} = await SignInWithGithubPopUp()
        createUserDatabase(user)
    }

    const handleFacebookClick = async () => {
        const {user} = await SignInWithFacebookPopUp()
        createUserDatabase(user)
    }
    return ( 
        <div className="sign">
            <Theme />
            <div className="hero">
                <h1>welcome to ShareSync</h1>
                <div className="mediaLogin">
                    <button onClick={handleGoogleClick}>
                        <i className="fa-brands fa-google"></i>Continue with Google</button>
                    <button onClick={handleGithubClick}>
                    <i className="fa-brands fa-github"></i>Continue with GitHub</button>
                    <button onClick={handleFacebookClick}>
                    <i className="fa-brands fa-facebook"></i>Continue with Facebook</button>
                </div>

                <div className="or">
                    <p>or</p>
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default Sign;