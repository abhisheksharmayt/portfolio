import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";
import logo from "../../images/logo512.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksDivRef = useRef(null);
  const linksListRef = useRef(null);
  useEffect(() => {
    if (linksDivRef.current && linksListRef.current) {
      const height = linksListRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksDivRef.current.style.height = `${height}px`;
      } else {
        linksDivRef.current.style.height = `0px`;
      }
    }
  }, [showLinks]);
  return (
    <>
      <div className="navbar">
        <div className="logo-bar-div" onClick={() => setShowLinks(!showLinks)}>
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <FaBars className="fabars" />
        </div>
        <div className="links-div" ref={linksDivRef}>
          <ul className="links-list" ref={linksListRef}>
            {links.map((curr) => {
              const { id, url, text } = curr;
              return (
                <li
                  key={id}
                  className="nav-link"
                  onClick={() => setShowLinks(false)}
                >
                  {
                    <NavLink to={url} className="navLink">
                      {text}
                    </NavLink>
                  }
                </li>
              );
            })}
            <li className="nav-link">
              <a
                className="navLink"
                target="_blank"
                href="https://drive.google.com/file/d/1NCNuoF5E88HmdsI4IbNGldunUsT-hqXq/view?usp=share_link"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="dark-mode"></div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
