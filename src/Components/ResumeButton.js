import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResumeButton.module.css";

function ResumeButton() {
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.button} onClick={() => navigate("/resume")}>
        Download Resume
      </button>
    </>
  );
}

export default ResumeButton;
