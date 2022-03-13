import React from "react";
import "../Styling/Project.css";
import { AiFillGithub } from 'react-icons/ai';
import logo from "../Images/image1.jpg";
export default function Project() {
  return (
    <>
      <div className="project_box">
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
              <img src={logo} alt="Project_image" />
            </div>
            <div className="project_content">
              <div className="project_title formar">
                <h1 id="forbg">Digital Menu</h1>
              </div>
              <div className="project_tags formar">
                <p id="forbg">
                  My partner built the back end Node API that fed to my React &
                  Redux front end. Also created a CSS libarary to speed
                  development.
                </p>
              </div>
              <div className="project_info formar">
                <p id="forbg">
                  Online database menu management for <br /> restaurants. Open
                  API any onlinemenu <br />
                  service can make a request for data.
                </p>
              </div>
            </div>
            <div className="project_buttons formar" id="forbg">
              <button>Try it</button> <button><AiFillGithub size="100%" /></button>
            </div>
          </div>
          <div className="content_project_box1 main_conten_project">
            <div className="project_image">
              <img src={logo} alt="Project_image" />
            </div>
            <div className="project_content">
              <div className="project_title formar">
                <h1 id="forbg">Digital Menu</h1>
              </div>
              <div className="project_tags formar">
                <p id="forbg">
                  My partner built the back end Node API that fed to my React &
                  Redux front end. Also created a CSS libarary to speed
                  development.
                </p>
              </div>
              <div className="project_info formar">
                <p id="forbg">
                  Online database menu management for <br /> restaurants. Open
                  API any onlinemenu <br />
                  service can make a request for data.
                </p>
              </div>
            </div>
            <div className="project_buttons formar" id="forbg">
              <button>Try it</button> <button><AiFillGithub size="100%" /></button>
            </div>
          </div>
          <div className="content_project_box1 main_conten_project">
            <div className="project_image">
              <img src={logo} alt="Project_image" />
            </div>
            <div className="project_content">
              <div className="project_title formar">
                <h1 id="forbg">Digital Menu</h1>
              </div>
              <div className="project_tags formar">
                <p id="forbg">
                  My partner built the back end Node API that fed to my React &
                  Redux front end. Also created a CSS libarary to speed
                  development.
                </p>
              </div>
              <div className="project_info formar">
                <p id="forbg">
                  Online database menu management for <br /> restaurants. Open
                  API any onlinemenu <br />
                  service can make a request for data.
                </p>
              </div>
            </div>
            <div className="project_buttons formar" id="forbg">
              <button>Try it</button> <button><AiFillGithub size="100%" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
