import React from 'react';
import styles from './StyledAbout.module.css'; 

export const AboutText = () => {
  return (
    <div>
      <h1 className={styles.AboutTitle}>Let me tell you my story</h1> 
      <div className={styles.AboutP}> 
        <p>
          I am Victoria, or just Maria, as some of you may call me after my
          first name. I am an English teacher. So... "What am I doing here
          today" you may ask. Sure, I have decided to make a little (or huge)
          change in my life.
        </p>
        <p>
          Some months ago, a close friend of mine mentioned I would very much
          like to study programming. Study what? Yes, I had no clue what
          programming was. As far as I knew, a programmer was a geek that sat in
          front of his computer (and I say "his" intentionally), day after day,
          and night after night, in a dark, damp room. No contacts with the
          outer world. Did I want that?
        </p>
        <p>
          Why not? As I said before, I wanted a change. How bad could that be?
          But what exactly IS programming?
        </p>
        <p>
          That is when I decided to enroll in a programming course from scratch.
          I immediately fell in love. That love drove me to HENRY and to where I
          am today: my very first steps into a newer universe.
        </p>
        <p>Hope you enjoy what I have done with this app!</p>
      </div>
    </div>
  );
};
