import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";
import logo from "../../images/logo512.png";

// Define an interface for the links data structure
interface Link {
  id: number;
  url: string;
  text: string;
}

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksDivRef = useRef<HTMLDivElement>(null); // Ref type assertion
  const linksListRef = useRef<HTMLUListElement>(null); // Ref type assertion

  useEffect(() => {
    if (linksListRef.current && linksDivRef.current) {
      const height = linksListRef.current.getBoundingClientRect().height;
      linksDivRef.current.style.height = showLinks ? `${height}px` : `0px`;
    }
  }, [showLinks]);

  return (
    <>
      <div className="navbar">
        <div className="logo-bar-div" onClick={() => setShowLinks(!showLinks)}>
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
          <FaBars className="fabars" />
        </div>
        <div className="links-div" ref={linksDivRef}>
          <ul className="links-list" ref={linksListRef}>
            {links.map((curr: Link) => (
              <li
                key={curr.id}
                className="nav-link"
                onClick={() => setShowLinks(false)}
              >
                <NavLink to={curr.url} className="navLink">
                  {curr.text}
                </NavLink>
              </li>
            ))}
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
