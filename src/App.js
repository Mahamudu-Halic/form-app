import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";

import "./App.css"
import { useContext, useState } from "react";
import { Context } from "./components/context.provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
const App = () => {
  const {theme, isLight} = useContext(Context)
  const [isValid, setIsValid] = useState(true)

  const ProtectedRoute = ({children}) => {
    if (!isValid){
      return(
        <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
      )
    }

    return (children)
  }

  return ( 
    <BrowserRouter>
      <div className="app" style={isLight? {background: theme.light.background, color: theme.light.color} : {background: theme.dark.background, color: theme.dark.color}}>
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;