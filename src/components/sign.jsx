import "../styles/sign.css"

const Sign = ({children}) => {
    return ( 
        <div className="sign">
            <div className="hero">
                <h1>welcome to LearnHub</h1>
                <div className="google">
                    <button>Continue with Google</button>
                    <button>Continue with GitHub</button>
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