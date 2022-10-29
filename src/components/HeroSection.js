import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../css/HeroSection.css';
import bg from '../videos/bg.jpg';
import * as SiIcons from 'react-icons/si';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={bg} />
      <h1>THE GOLDEN AGE IS OVER</h1>
      <p><i>Don't start a fight. Start a revolution.</i></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PLAY NOW 
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <FaIcons.FaPlayCircle/>
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;