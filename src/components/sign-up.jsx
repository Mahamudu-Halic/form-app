import { Link } from "react-router-dom";
import { createUserDatabase, SignUpWithEmailPassword } from "../utils/firebase.utils";
import Sign from "./sign";
import Theme from "./theme";

const SignUp = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const {user} = await SignUpWithEmailPassword(email, password)
        user.displayName = displayName
        createUserDatabase(user)
    }
    return ( 
        <>
        {/* <Theme /> */}
        <Sign>
            <form action="" onSubmit={handleSubmit}>
                <h2>Get started</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" required/>
                </div>

                <button>Sign up</button>

                <div className="">
                    <label htmlFor="">
                        Already have an accout? <Link to="/">Sign In</Link>
                    </label>
                </div>
            </form>
        </Sign>
        </>
    );
}

export default SignUp;