import { Link } from "react-router-dom";
import { createUserDatabase, SignInWithEmailPassword } from "../utils/firebase.utils";
import Sign from "./sign";
import Theme from "./theme";
const SignIn = () => {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        const {user} = await SignInWithEmailPassword(email, password)
        // createUserDatabase(user)

        console.log("user", user)
    }
    return ( 
        <>
        {/* <Theme /> */}
        <Sign>
            <form action="" onSubmit={handleSubmit}>
                <h2>sign in</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" required/>
                </div>

                <button>Sign in</button>

                <div className="">
                    <label htmlFor="">
                        Don&apos;t have an accout? <Link to="/sign-up">Sign Up</Link>
                    </label>
                </div>
            </form>
        </Sign>
        </>
     );
}
 
export default SignIn;