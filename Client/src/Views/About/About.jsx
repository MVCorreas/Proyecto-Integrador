import React from 'react';
import { AboutText } from './AboutText';
import styles from './StyledAbout.module.css'; 

export const About = () => {
  return (
  
      <div className={styles.AboutBackground}> 
        <h1 className={styles.AboutTitle}>Let me tell you my story</h1>
        <AboutText />
      </div>
  );
};
