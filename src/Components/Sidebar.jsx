import React, { useState } from "react";
import Logo from "../imgs/logo.png";
import "./Sidebar.css"
import { SidebarData } from "../Data/Data";
import { MdOutlineKeyboardBackspace } from "react-icons/md";



const Sidebar = () => {

  const [selected, setSelected] = useState(0);
      
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <div className="shop">
          SH<span>O</span>P
        </div>
      </div>

      <br />

      {SidebarData.map((item, index) => {
        return (
          <div className="menu" style={{color:"black"}}>
            <div
              className={selected === index ? "menu-item active" : "menu-item"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon className="icon" />

              <span style={{ fontSize: "20px", color:"black" }}>{item.heading}</span>
            </div>
          </div>
        );
      })}
      <div style={{position:"relative", top:"40px"}}>
        <MdOutlineKeyboardBackspace
          style={{
            border: "1px solid white",
            borderRadius: "100%",
            fontSize: "25px",
            color:"black"
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
