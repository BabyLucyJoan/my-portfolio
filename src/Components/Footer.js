import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a
          href="https://facebook.com/lucy.nwokoye-5b924128b"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className={styles.icon} />
        </a>
        <a
          href="https://github.com/BabyLucyJoan"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={styles.icon} />
        </a>

        <a
          href="https://instagram.com/njl_splendour"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>

        <a
          href="https://twitter.com/babylucyjoan"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className={styles.icon} />
        </a>

        <a
          href="https://linkedin.com/in/nwokoye-lucy"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className={styles.icon} />
        </a>
        <a
          href="https://tiktok.com/in/nwokoye-lucy"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok className={styles.icon} />
        </a>
      </div>
      <p>© 2025 All rights reserved</p>
    </footer>
  );
}

export default Footer;
