import React from 'react';
import './Footer.css';
import {MdOutlineSlowMotionVideo} from 'react-icons/md';

function Footer() {
  return (
    <footer className='Footer'>
            <a href="#!" className='logo'> 
                <b>&copy;KIN</b>
                <MdOutlineSlowMotionVideo className='logo_icon'/>
                <b>TEATR.</b>
                <b>LIVE</b> 
            </a>
    </footer>
  )
}

export default Footer;