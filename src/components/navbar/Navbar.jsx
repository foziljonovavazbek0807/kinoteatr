import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <a href="#!" className="logo">
        <b className="logo_text">KIN</b>
        <MdOutlineSlowMotionVideo className="logo_icon" />
        <b className="logo_text">TEATR</b>
      </a>
      <form className="search_block">
        <input type="text" placeholder="Movie search" />
        <a href="#!" className="search_icon">
          <BiSearch />
        </a>
        <button className="btn_search">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;