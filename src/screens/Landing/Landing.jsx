import React from 'react';
import { Typewritter, AnimatedBackground } from '../components';
import "./Landing.css";

let msgArray = [
  // " ",
  "Front-end Developer",
  "Back-end Developer",
  " ",

]

function Landing() {
  return (
   <AnimatedBackground>
    <div className='landing-type'>
      <div>What am I?</div>
    <Typewritter data={msgArray} />
    </div>
    
   </AnimatedBackground>
  )
}

export default Landing