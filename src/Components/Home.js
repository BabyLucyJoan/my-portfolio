import React from "react";
function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am a Frontend Developer passionate about creating beautiful websites.
      </p>
      <button style={styles.button}>View My Work</button>
    </div>
  );
}
const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
  },
  button: {
    padding: "10px 20px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
export default Home;
