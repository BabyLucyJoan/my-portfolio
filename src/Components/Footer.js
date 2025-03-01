import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <FaFacebookF className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <FaLinkedinIn className={styles.icon} />
      </div>
      <p>Copyright ©2025 All rights reserved</p>
    </footer>
  );
}

export default Footer;
