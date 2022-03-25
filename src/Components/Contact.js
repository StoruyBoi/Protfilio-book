import React, { useState } from "react";
import "../App.css";
import "../Styling/Contact.css";

export default function Contact() {
  const [userData, setUserData] = useState({
    firstName: "",
    textEmail: "",
    Message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, textEmail, Message } = userData;
    if(firstName && textEmail && Message )
    {
      
    
    const res = fetch(
      "https://portfolio-c7831-default-rtdb.firebaseio.com/userDataRecords.json",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstName,
          textEmail,
          Message,
        }),
      }
    );

    if (res) {
setUserData({
  firstName: "",
    textEmail: "",
    Message: "",
})

      alert("Data Stored");
    } else {
      alert("plz fill the dat");
    }
  }
  else{
    alert("Plz fill the data")
  }
  };

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
                value={userData.firstName}
                onChange={postUserData}
                name="firstName"
                id="AddName"

              />
              for sure
            </div>
            <div className="input_box">
              <div className="uplaceholder">Email</div>
              <input
                className="inputText"
                type="email"
                name="textEmail"
                id="AddEmail"
                value={userData.textEmail}
                onChange={postUserData}
              />
            </div>

            <div className="input_box">
              {" "}
              <div className="uplaceholder">Message</div>
              <textarea
                id="inputText"
                name="Message"
                className=" inputText addtext"
                cols="30"
                rows="10"
                onChange={postUserData}
                value={userData.Message}
              ></textarea>
            </div>
            <div className="contaienr_input_button">
              <button className="arrow_btn" onClick={submitData}>
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
