import React from "react";
import styles from "./Blog.module.css";
import BlogCard from "./BlogCard";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Components",
      description:
        "A guide to building modular and reusable UI components in React.",
      date: "March 1, 2025",
    },
    {
      id: 2,
      title: "CSS Modules in React",
      description:
        "Learn how to style your React components effectively using CSS Modules.",
      date: "March 3, 2025",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>My Blog</h1>
      <p className={styles.blogDescription}>
        Insights, tutorials, and thoughts on web development.
      </p>

      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}
export default Blog;
