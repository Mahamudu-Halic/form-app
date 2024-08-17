import { useState } from "react";
import "../styles/sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import Theme from "./theme";
const SideBar = () => {
  const [active, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!active);
  };

  const sideBarList = [
    {
      icon: "bi bi-house",
      title: "home",
      link: "/",
    },
    {
      icon: "bi bi-journal",
      title: "course",
      link: "courses",
    },
    {
      icon: "bi bi-upload",
      title: "upload",
      link: "upload",
    },
    {
      icon: "bi bi-chat",
      title: "community",
      link: "community",
    },
    {
      icon: "bi bi-book",
      title: "quiz",
      link: "quiz",
    },
    {
      icon: "bi bi-headset",
      title: "contact",
      link: "contact",
    },
  ];
  return (
    <div className={`sidebar ${active && "active"}`}>
      <div className="overlay" onClick={handleActive}></div>
      <div className="hamburger">
        <Link to={"/"} className="title">
          LearnHub
        </Link>
        <button onClick={handleActive}>
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </div>
      <div className={`nav ${active && "active"}`}>
        <div className="brand">
          <NavLink to="/">
            <h1>
              <span className="title">LearnHub</span>
            </h1>
          </NavLink>
        </div>
        <div className="close" onClick={handleActive}>
          <i className="bi bi-x"></i>
        </div>
        <div className="user">
          <UserButton />
        </div>
        <Theme />
        <div className="nav-items">
          {sideBarList.map((list) => {
            return (
              <div key={list.title} title={list.title} onClick={handleActive}>
                <NavLink to={list.link}>
                  <button>
                    <i className={list.icon}></i>
                    {list.title}
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
