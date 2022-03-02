import React from 'react';
import './Head.css';
import MOVIELOGO from './assets/movie-logo.png';
import VIDEO from './assets/clood.mp4';
import {AiOutlineArrowDown} from 'react-icons/ai';

function Head() {
  return (
    <div className='Head__container'>

        <video className='bc_mp4' src={VIDEO} autoPlay="true"/>

        <div className='text_container'>
            <a href="#!" className='logo'>
                <img src={MOVIELOGO} alt="movie-logo"/>    
            </a>
            <p className='und_text'>Press the button and enjoy the films!</p>
            <AiOutlineArrowDown className='down_arrow'/>
            <a href="#!" className='start_btn'>Get start</a>
        </div>

    </div>
  )
}

export default Head;