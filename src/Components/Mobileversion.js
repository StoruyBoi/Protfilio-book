import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Mobileversion.css";

export default function Mobileversion() {
  return (
    <>
      <div className="mobile_list">
        
        <div className="list_box">
          <ul>
            <li >
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Project">PROJETCS</Link>
            </li>
            <li>
              <Link to="/Contact">CONATCT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
