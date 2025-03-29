// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "../../context/ThemeContext";
// import styles from "./Navbar.module.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { darkMode, toggleDarkMode } = useContext(ThemeContext);

//   const navLinks = [
//     { path: "/", name: "Home" },
//     { path: "/blog", name: "Blog" },
//     { path: "/contact", name: "Contact" },
//     { path: "/NoteAngel", name: "NoteAngel" },
//   ];

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav
//       className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}
//     >
//       <div className={styles.container}>
//         <Link to="/" className={styles.brand}>
//           My Portfolio
//         </Link>

//         <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={styles.navLink}
//               onClick={closeMenu}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         <div className={styles.controls}>
//           <button
//             onClick={toggleDarkMode}
//             className={`${styles.themeToggle} ${
//               darkMode ? styles.dark : styles.light
//             }`}
//             aria-label="Toggle theme"
//           >
//             {darkMode ? "☀️" : "🌙"}
//           </button>

//           <button
//             className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
//             onClick={toggleMenu}
//             aria-label="Menu"
//           >
//             <span className={styles.bar}></span>
//             <span className={styles.bar}></span>
//             <span className={styles.bar}></span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/gallery", name: "Gallery" },
    { path: "/contact", name: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          Lucy Nwokoye
        </Link>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle Switch in Dropdown */}
          <div className={styles.themeToggleWrapper}>
            <span>☀️</span>
            <div className={styles.themeSwitch} onClick={toggleDarkMode}>
              <div
                className={`${styles.switchCircle} ${
                  darkMode ? styles.active : ""
                }`}
              ></div>
            </div>
            <span>🌙</span>
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
