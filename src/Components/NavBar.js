import React from "react";
function NavBar() {
  return (
    <nav style={styles.navbar}>
      <h2>My Portfolio</h2>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="projects">Projects</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    background: "#333",
    color: "#fff",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
  },
};
export default NavBar;
