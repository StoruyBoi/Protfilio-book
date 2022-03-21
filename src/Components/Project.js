import React from "react";
import Iframe from 'react-iframe'
import "../App.css"
import "../Styling/Project.css";
import { AiFillGithub } from 'react-icons/ai';
import logo from "../Images/image1.jpg";
export default function Project() {
  return (
    <>
      <div className="project_box light_mode">
        <div className="content_upper">
          <div className="box_title">
            <h1>MY PROJECTS</h1>
          </div>
          <div className="box_small_title">
            <p>for kind love and support?</p>
          </div>
        </div>
        {/* -----------------------------------------------------------------------project cards -------------------------------------------------------------- */}
        <div className="box_main_content">
          <div className="content_project_box1 main_conten_project">
            <div className="project_image">
            <Iframe src="https://www.youtube.com/embed/WjKIN4AC9Dc"
            height="300px%"
            width="100%"
            />
            </div>
            <div className="project_content">
              <div className="project_title formar">
                <h1 id="forbg">Portfolio Website</h1>
              </div>
              <div className="project_tags formar">
                <p id="forbg">
                  Javascript Html  CSS React
                </p>
              </div>
              <div className="project_info formar">
                <p id="forbg">
                My first react app which is just basically my portfolio just simple with is created with amazing frontend end framwork also a complete design for night theme and day theme also with fully responsiveness.
                </p>
              </div>
            </div>
            <div className="project_buttons check formar" id="forbg">
              <a href="https://storuyboi.github.io/Protfilio-book/"> <button>Try it</button> </a>
             <button> <a href="https://github.com/StoruyBoi/Protfilio-book"></a><AiFillGithub size="100%" /></button>
            </div>
          </div>
          
         
        </div>
      </div>
    </>
  );
}
