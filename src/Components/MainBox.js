import { AiFillInstagram } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import "../App.css"
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import React from "react";
import "../Styling/MainBox.css";
  
export default function MainBox() {
  return (
    <>
      <div className="Main_box_contianer light_mode">
        <div className="container_cotent_box">
          <div className="content_box_samall_title content_box_mar">
            <p>WELCOME TO OPENBOOK</p>
          </div>
          <div className="content_box_big_title content_box_mar">
            <h1>
              A visual cloud storage <br /> beyond files and folders.
            </h1>
          </div>
          <div className="content_box_paragraph content_box_mar">
            <p>
            I am jasminder young passionate  who see their future brighter <br />than past <b>hustling</b>   today day night having some skill to<br />  create things who matters a lot  I hope u enjoy.
            </p>
          </div>
          <div className="MianBox_login">
          <button id="mid_btn_space"><a href="https://www.linkedin.com/in/jasminder-singh-30a298214/"><AiFillLinkedin size="20px"/>LinkedIn </a></button>
          <button id="mid_btn_space"><a href="https://github.com/StoruyBoi"><AiFillGithub size="20px" />GitHub</a></button>
          <button id="mid_btn_space"><a href="https://twitter.com/jasminder200111"><AiOutlineTwitter size="20px" />Twitter</a></button>
          <button id="mid_btn_space"><a href="https://www.instagram.com/jasminder___singh/"><AiFillInstagram size="20px" />Instagram</a></button>
          <button id="mid_btn_space"><a href= "mailto: itsjasminder@gmail.com"><HiOutlineMail size="20px" />Email</a></button>
        </div>
        </div>
      </div>
    </>
  );
}
