import { Link } from "react-router-dom";
import Sign from "./sign";
import Theme from "./theme";

const SignIn = () => {
    return ( 
        <>
        {/* <Theme /> */}
        <Sign>
            <form action="">
                <h2>sign in</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" />
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