import React from "react";
import styles from "./Resume.module.css";

function Resume() {
  const resumeUrl = "/resume.pdf"; // Update with the actual PDF path

  return (
    <div className={styles.resumeContainer}>
      <iframe src={resumeUrl} title="Resume" className={styles.resumeViewer} />
    </div>
  );
}

export default Resume;
