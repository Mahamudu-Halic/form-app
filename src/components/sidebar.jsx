import { useState } from "react";
import "../styles/sidebar.css"
import { NavLink } from "react-router-dom";
const SideBar = () => {
    const [active, setIsActive] = useState(false)

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
            link: "chat",
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
        {
            icon: "fa-solid fa-user",
            title: "profile",
            link: "profile",
        },
    ]
    return ( 
        <div className="sidebar">
            <div className="hamburger" onClick={handleActive}>
                <i className="fa-solid fa-bars-staggered"></i>
            </div>
            <div className={`items ${active && "active"}`}>
                <div className="close" onClick={handleActive}>
                    <i className="fa-solid fa-close"></i>
                </div>
                {
                    sideBarList.map(list => {
                        return(
                            <div className="" key={list.title} title={list.title} onClick={handleActive}>
                                <NavLink to={list.link}>
                                    <button><i className={list.icon}></i>{list.title}</button>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default SideBar;