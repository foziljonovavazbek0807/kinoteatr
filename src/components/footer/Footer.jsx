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
