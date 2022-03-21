import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GiAbstract004 } from "react-icons/gi";
import { GiAbdominalArmor } from "react-icons/gi";
import { GiAbstract016 } from "react-icons/gi";
import { GiAbstract030 } from "react-icons/gi";
import { GiAbstract051 } from "react-icons/gi";
import { GiAbstract096 } from "react-icons/gi";
import "../Styling/Center.css";
import Project from "./Project";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import For_status_icon from "./For_status_icon";
export default function Social_center() {
  return (
    <div className="center_main">
      <div className="center_main_box">
        <div className="box_nav_bar">
          <div className="nav_bar_coontent">
            {" "}
            <GiAbstract004 className="forspecific" />
            <Link to="/Projects">Hello</Link>
            <Link to="/Contact">contact us</Link>
            <Link to="/Projects">Hello</Link>
            <GiAbdominalArmor className="forspecific" />
            <GiAbstract016 className="forspecific" />
            <GiAbstract030 className="forspecific" />
            <GiAbstract051 className="forspecific" />
            <GiAbstract096 className="forspecific" />
          </div>
        </div>
        <div className="box_status_box">
        <div className="status_bsr_div">
    
        </div>
        </div>
        <div className="box_maain_content">




        <Routes>
           <Route exact path="/Projects" element={<Project/>}></Route>
           <Route exact path="/Contact" element={<Contact/>}></Route>
        </Routes>
   
        </div>
      </div>
    </div>
  );
}
