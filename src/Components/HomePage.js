import React from "react";
import styles from "./HomePage.module.css";
import ResumeButton from "./ResumeButton";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1>
          Hi, I am Lucy, <br />{" "}
          <span className={styles.jobTitle}>Front-end Developer</span>
        </h1>
        <p>
          I’m a web developer with a passion for creating dynamic,
          user-friendly, and visually appealing web applications. I specialize
          in building responsive interfaces with React, ensuring seamless
          performance across all devices. With a strong focus on functionality
          and design, I bring ideas to life through clean, efficient, and
          maintainable code
        </p>
        <ResumeButton />
      </div>
      <div className={styles.imageSection}>
        <img src="/profile.JPG" alt="Lucy" className={styles.profileImage} />
      </div>
    </div>
  );
}

export default HomePage;
