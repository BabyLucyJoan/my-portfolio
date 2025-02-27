import React from "react";
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>{"\u00A9"}2025 My Portfolio. All rights reserved.</p>
    </footer>
  );
}
const styles = {
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
    padding: "1rem",
    background: "#333",
    color: "#fff",
    marginTop: "2rem",
  },
};
export default Footer;
