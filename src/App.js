import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays at the top */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> {/* Footer stays at the bottom */}
    </Router>
  );
}

export default App;
