import React from "react";
import "../App.css"
import "../Styling/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="Contact_box light_mode">
        <div className="Contact_box_container">
          <h1 id="for_small">Get in touch</h1>
          <hr id="straight_line" />
          <h1 id="container2">Take me to You</h1>
          <p id="container3">
            Got a project you're excited about and think we can help? Contact
            Sir/Mam at <br />
            <b>itsjasminder@gmail.com</b>
          </p>{" "}
          <div className="texttt">
            <div className="input_box">
              <div className="uplaceholder specific">Name</div>
              <input
                className="inputText"
                type="text"
                name="Text"
                id="AddName"
              />
            </div>
            <div className="input_box">
              <div className="uplaceholder">Email</div>
              <input
                className="inputText"
                type="email"
                name="Email"
                id="AddEmail"
              />
            </div>

            <div className="input_box">
              {" "}
              <div className="uplaceholder">Message</div>
              <textarea
                id="inputText"
                name="Text"
                className=" inputText addtext"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="contaienr_input_button">
              <button className="arrow_btn">
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
