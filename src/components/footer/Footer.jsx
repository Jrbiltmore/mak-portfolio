/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Majid Ali Khan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        {/* <li>
          <a href="#experience">Experience</a>
        </li> */}
        <li>
          <a href="#services">Services</a>
        </li>
        {/* <li>
          <a href="#portfolio">Portfolio</a>
        </li> */}
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/majidalykhan/" target="_blank" rel="noreferrer">
          <AiFillLinkedin className="footer__socials-icon"/>
        </a>
        <a href="https://github.com/majidalykhan" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://www.fiverr.com/majidalykhan" target="_blank" rel="noreferrer">
          <SiFiverr />
        </a>
      </div>
      {/* <div className="footer__copyright">
        <small>&copy; Majid Ali Khan. All rights reserved.</small>
      </div> */}
    </footer>
  );
};

export default Footer;
