import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import styles from "./App.css";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <NavBar />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
