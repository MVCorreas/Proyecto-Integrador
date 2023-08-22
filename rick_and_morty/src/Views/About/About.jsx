import React from 'react'
import { AboutText } from './AboutText';
import { AboutBackground } from './StyledAbout';


export const About = () => {
  return (
    <>
    <AboutBackground>
        <h1>About Me</h1>
        <AboutText />
    </AboutBackground>
    </>
  )
}
