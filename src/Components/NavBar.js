// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./NavBar.module.css";

// function NavBar() {
//   return (
//     <nav className={styles.navbar}>
//       <h1>My Portfolio</h1>

//       <div className={styles.navbarMenu}>
//         <Link to="/">Home</Link>
//         <Link to="/blog">Blog</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
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

      {/* Navigation Links (For Large Screens) */}
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Hamburger Menu (For Small Screens) */}
      <div className={styles.menuContainer}>
        <div className={styles.hamburger}>☰</div>

        {/* Navbar Menu */}
        <div className={styles.navbarMenu}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
