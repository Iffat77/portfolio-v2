import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./nav.css";

export default function Nav() {
  return (
    <div className="nav-container h-full border-blue-500 border-solid p-[1rem]">
      <div className="nav-liner flex h-full w-full justify-between items-center">
        <div>iffatHossain</div>
        <div className="nav-right w-1/3 flex center ">
          <ul className="nav-list w-full flex justify-around">
            <div>Projects</div>
            <div>About</div>
            <div>Contact</div>
            <div>Resume</div>
          </ul>
        </div>
      </div>
    </div>
  );
}
