import "../styles/sign.css"
import Theme from "./theme";
import { SignInWithGooglePopUp, createUserDatabase, SignInWithGithubPopUp } from "../utils/firebase.utils";

const Sign = ({children}) => {
    const handleGoogleClick = async () => {
        const {user} = await SignInWithGooglePopUp()
        createUserDatabase(user)
    }

    const handleGithubClick = async () => {
        const {user} = await SignInWithGithubPopUp()
        console.log(user)
    }
    return ( 
        <div className="sign">
            <Theme />
            <div className="hero">
                <h1>welcome to LearnHub</h1>
                <div className="google">
                    <button onClick={handleGoogleClick}>Continue with Google</button>
                    <button onClick={handleGithubClick}>Continue with GitHub</button>
                    <button>Continue with Facebook</button>
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