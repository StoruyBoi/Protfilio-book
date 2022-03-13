import React, { useState } from "react";
import classes from "../Styling/Navbar.css";
import { Turn as Hamburger } from "hamburger-react";
import Mobileversion from "./Mobileversion";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  let menu;
  if (isOpen) {
    menu = <Mobileversion />;
  }

  const enable = 
    <div className="dark_mode">
      <MdDarkMode size="25px" onClick={() => setOpen(!isOpen)} />
    </div>
  const disable = (
    <div className="light_mode">
      <MdOutlineDarkMode size="25px" onClick={() => setOpen(!isOpen)} />
    </div>
  );

  return (
    <div className="NavBar">
      <div className="NavBar_Main_box">
        <div className="MianBox_logo">
          <h1 className="ForWhite test">
            <Link to="/">.heeeeeeeeeeeeeeeeeeeeeeeel</Link>
          </h1>
        </div>

        <div className="MainBox_Main_List">
          <ul>
            <li>
              <Link className="ForWhite" to="/Blog">
                BLOG
              </Link>
            </li>
            <li>
              <Link className="ForWhite" to="/Project">
                PROJETCS
              </Link>
            </li>
            <li>
              <Link className="ForWhite" to="/Contact">
                CONATCT
              </Link>
            </li>
            <li id="security">
              <Link className="ForWhite" to="/">
                BACKEND
              </Link>
            </li>
          </ul>
        </div>
        <div className="MianBox_login only_this_to_hide_inMobile">
          <button>Login</button>
        </div>

        <div className="hamburger">
          {" "}
          <Hamburger
            color="White"
            toggled={isOpen}
            toggle={setOpen}
            onClick={() => setOpen(!isOpen)}
          />
        </div>


        <div className="enableDisableBtn">
            { isOpen ? disable : enable }

        </div>
      </div>
      {menu}
    </div>
  );
}
