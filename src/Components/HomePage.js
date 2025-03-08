import React from "react";
import styles from "./HomePage.module.css";
import Hero from "./Hero";

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Hero />;
    </div>
  );
}

export default HomePage;
