import React from "react";
import styles from "./Hero.module.css";
import ResumeButton from "../ResumeButton/ResumeButton";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textSection}>
        <h1>Hi, I am Lucy,</h1>
        <span className={styles.jobTitle}>Front-end Developer</span>
        <p className={styles.p}>
          I'm a web developer with a passion for creating dynamic,
          user-friendly, and visually appealing web applications. I specialize
          in building responsive interfaces with React, ensuring seamless
          performance across all devices.
        </p>
        <ResumeButton />
      </div>
      <div className={styles.imageContainer}>
        <img src="/profile1.jpeg" alt="Lucy" className={styles.profileImage} />
      </div>
    </section>
  );
}

export default Hero;
