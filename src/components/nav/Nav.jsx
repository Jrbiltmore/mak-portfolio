import React from "react";
import "./nav.css";
import { useState } from "react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import {
  MdOutlineMiscellaneousServices,
  MdOutlineContacts,
} from "react-icons/md";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav id="navbar">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        About
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        Experience
      </a>
      <a
        href="#resume"
        onClick={() => setActiveNav("#resume")}
        className={activeNav === "#resume" ? "active" : ""}
      >
        Resume
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        Services
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
