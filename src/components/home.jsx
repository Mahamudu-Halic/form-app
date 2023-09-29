import { Route, Routes, useParams } from "react-router-dom";
import Chat from "./chat";
import Contact from "./contact";
import Courses from "./courses";
import Navbar from "./navbar";
import Overview from "./overview";
import SideBar from "./sidebar";
import Upload from "./upload";
import { useContext } from "react";
import { Context } from "./context.provider";
import Footer from "./footer";
import CourseMaterials from "./course-materials";
import Profile from "./profile";
import DownloadFile from "./download-file";

const HomePage = () => {
    const {theme, isLight} = useContext(Context)
    return ( 
        <div className="home" style={isLight? {background: theme.light.background, color: theme.light.color} : {background: theme.dark.background, color: theme.dark.color}}>            <Navbar />
            <div className="align">
                <SideBar />
                <div className="routes">
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/courses" element={<Courses/>} />
                        <Route path="/upload" element={<Upload/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/chat" element={<Chat/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/courses/:param" element={<CourseMaterials />} />
                        <Route path="/courses/:param/:year/:route" element={<DownloadFile />} />
                    </Routes>

                    {/* <Footer /> */}
                    
                </div>
            </div>
        </div>
    );
}
 
export default HomePage;