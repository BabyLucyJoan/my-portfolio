import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import BlogCard from "./Components/BlogCard";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <BlogCard
        title="The birth of a Legend"
        date="22 Sep 2001"
        category="Express, Handlebars"
        description="The birth of a Legend."
      />
      <BlogCard
        title="UI Interactions of the week"
        date="12 Dec 2016"
        category="Express, Handlebars"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <BlogCard
        title="UI Interactions of the week"
        date="28 Apr 2019"
        category="Express, Handlebars"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <BlogCard
        title="UI Interactions of the week"
        date="12 Feb 2025"
        category="Express, Handlebars"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <Footer />
    </div>
  );
}

export default App;
