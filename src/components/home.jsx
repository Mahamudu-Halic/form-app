import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./chat";
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
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/courses" element={<Courses/>} />
                    <Route path="/upload" element={<Upload/>} />
                    <Route path="/settings" element={<Settings/>} />
                    <Route path="/chat" element={<Chat/>} />
                </Routes>
            </div>
        </>
     );
}
 
export default HomePage;