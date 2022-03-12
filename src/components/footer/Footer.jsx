import React from "react";
import "./Footer.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <footer className="Footer">
      <a href="#!" className="logo">
        <b>KIN</b>
        <MdOutlineSlowMotionVideo className="logo_icon" />
        <b>TEATR.</b>
        <b>LIVE</b>
      </a>

      <ul className="footer_menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Comment</a>
        </li>
        <li>
          <a href="#!">FAQ</a>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>

      <div className="footer_copyright">
        <p>&copy;kinoteatr.live - 2022</p>
        <p>
          The rights to the films belong to their authors. All films are
          provided for information only. <br /> Source: www.kinoteatr.live
        </p>
      </div>
    </footer>
  );
}

export default Footer;
