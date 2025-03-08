// import React from "react";
// import styles from "./Footer.module.css";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.icons}>
//         <FaFacebookF className={styles.icon} />
//         <FaInstagram className={styles.icon} />
//         <FaTwitter className={styles.icon} />
//         <FaLinkedinIn className={styles.icon} />
//       </div>
//       <p>Copyright ©2025 All rights reserved</p>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a
          href="https://facebook.com/YourProfile"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className={styles.icon} />
        </a>

        <a
          href="https://instagram.com/njl_splendour"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>

        <a
          href="https://twitter.com/YourProfile"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className={styles.icon} />
        </a>

        <a
          href="https://linkedin.com/in/YourProfile"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className={styles.icon} />
        </a>
      </div>
      <p>© 2025 All rights reserved</p>
    </footer>
  );
}

export default Footer;
