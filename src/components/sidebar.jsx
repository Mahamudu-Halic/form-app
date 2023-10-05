import { Fragment, useState } from "react";
import "../styles/sidebar.css"
import { NavLink } from "react-router-dom";
import { UserButton, useClerk } from "@clerk/clerk-react";
import Theme from "./theme";
const SideBar = () => {
    const [active, setIsActive] = useState(false)
    const {user} = useClerk()

    const handleActive = () => {
        setIsActive(!active)
    }



    const sideBarList = [
        {
            icon: "fa-solid fa-home",
            title: "home",
            link: "/",
        },
        {
            icon: "fa-solid fa-book",
            title: "course",
            link: "courses",
        },
        {
            icon: "fa-solid fa-upload",
            title: "upload",
            link: "upload",
        },
        {
            icon: "fa-regular fa-message",
            title: "community",
            link: "community",
        },
        {
            icon: "fa-solid fa-book-open",
            title: "quiz",
            link: "quiz",
        },
        {
            icon: "fa-solid fa-headset",
            title: "contact",
            link: "contact",
        },
    ]
    return ( 
        <div className="sidebar">
            <div className="hamburger" onClick={handleActive}>
                <i className="fa-solid fa-bars-staggered"></i>
            </div>
            <div className={`nav ${active && "active"}`}>
                <div className="brand">
                    <NavLink to="/">
                        <h1>ShareSync</h1>
                    </NavLink>
                </div>
                <div className="close" onClick={handleActive}>
                    <i className="fa-solid fa-close"></i>
                </div>

                    <UserButton />
                <Theme />
                <div className="nav-items">

                {
                    sideBarList.map(list => {
                        return(
                            <div key={list.title} title={list.title} onClick={() => { if(active){handleActive()}}}>
                                <NavLink to={list.link}>
                                    <button><i className={list.icon}></i>{list.title}</button>
                                </NavLink>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;