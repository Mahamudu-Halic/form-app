import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./chat";
import Contact from "./contact";
import Courses from "./courses";
import Navbar from "./navbar";
import Overview from "./overview";
import Settings from "./settings";
import SideBar from "./sidebar";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import Upload from "./upload";

const HomePage = () => {
    return ( 
        <>
            <Navbar />
            <div className="align">
                <SideBar />
                <div className="routes">
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/courses" element={<Courses/>} />
                        <Route path="/upload" element={<Upload/>} />
                        <Route path="/settings" element={<Settings/>} />
                        <Route path="/chat" element={<Chat/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>

                    <footer>
                        footer goes here
                    </footer>
                </div>
            </div>
        </>
     );
}
 
export default HomePage;