import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";

import "./App.css"
import { useContext } from "react";
import { Context } from "./components/context.provider";
import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";
const App = () => {
  const {theme, isLight} = useContext(Context)

  return ( 
    <div className="app" style={isLight? {background: theme.light.background, color: theme.light.color} : {background: theme.dark.background, color: theme.dark.color}}>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <Navbar />
      <SideBar />
      <div className="hh">
      </div>
    </div>
   );
}
 
export default App;