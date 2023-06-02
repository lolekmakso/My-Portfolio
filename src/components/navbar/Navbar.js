import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";
import style from "./Navbar.module.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>My</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className={nav ? [style.navList, style.active].join(' ') : [style.navList]}>
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className="mobile__btn">
			{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            
			
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
