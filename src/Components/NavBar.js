// import styles from "./Navbar.module.css";
// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}> My Portfolio</div>
//       <ul className={styles.navLinks}>
//         <li>
//           <Link to="/" className={styles.navLink}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/blog" className={styles.navLink}>
//             Blog
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className={styles.navLink}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h1>My Portfolio</h1>
      <div className={styles.navbarMenu}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
