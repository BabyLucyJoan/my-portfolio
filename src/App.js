import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import styles from "./App.module.css"; // Changed to module.css

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className={styles.appContainer}>
          <Navbar />
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
    </ThemeProvider>
  );
}

export default App;
