import React from "react";
import "../Styling/Social_left.css";
import { FiAirplay } from "react-icons/fi";

import For_groups_and_friends from "./For_groups_and_friends";

export default function Social_left() {
  return (
    <>
      <div className="left_box">
        <div className="left_box_main">
          
          <div className="mian_nav_bar">
            
            <div className="main_nav_logo">
              <FiAirplay size="30px" />
            </div>
            <div className="mian_nav_search">
              <input type="text" />
            </div>
          </div>
          <div className="main_group_section">
            <div className="main_goup_titile">
              <h1>YOUR GROUP</h1>
            </div>
            <div className="mian_group_icons">
              <div className="group_1">
                <For_groups_and_friends />
              </div>
              <div className="group_2">
                <For_groups_and_friends />
              </div>
            </div>
          </div>
          <div className="main_friend_section">
            <div className="friend_title">
              <h1>FRIENDS</h1>
            </div>
            
          </div>
          <div className="friends_bar">
          <div className="group_2">
                <For_groups_and_friends />
              </div>
          <div className="group_2">
                <For_groups_and_friends />
              </div>
          <div className="group_2">
                <For_groups_and_friends />
              </div>
          <div className="group_2">
                <For_groups_and_friends />
              </div>
          <div className="group_2">
                <For_groups_and_friends />
              </div>
          <div className="group_2">
                <For_groups_and_friends />
              </div>
          <div className="group_2">
                <For_groups_and_friends />
              </div>
          <div className="group_2">
                <For_groups_and_friends />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
