import "./App.css"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { 
  ClerkProvider, 
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn
} from "@clerk/clerk-react";
import ContextProvider from "./components/context.provider";
import HomePage from "./pages/home";

const App = () => {
  
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;  

  function ClerkProviderWithRoutes() {
    const navigate = useNavigate();
   
    return (
      <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
        <SignedIn>
          <HomePage />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <Routes>
          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />
        </Routes>
      </ClerkProvider>
    );
  }

  return ( 
    <BrowserRouter>
      <ContextProvider>
        <ClerkProviderWithRoutes />
      </ContextProvider>
    </BrowserRouter>
  );
}
export default App;