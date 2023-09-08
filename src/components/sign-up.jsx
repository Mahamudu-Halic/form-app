import Sign from "./sign";
import Theme from "./theme";

const SignUp = () => {
    return ( 
        <>
        {/* <Theme /> */}
        <Sign>
            <form action="">
                <h2>Get started</h2>
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

                <button>Sign up</button>

                <div className="">
                    <label htmlFor="">
                        Already have an accout? Sign in
                    </label>
                </div>
            </form>
        </Sign>
        </>
    );
}

export default SignUp;