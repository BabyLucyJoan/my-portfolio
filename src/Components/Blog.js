import React from "react";
import styles from "./Blog.module.css";
import BlogCard from "./BlogCard";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Intro to Tech And Teach",
      videoUrl: "https://vm.tiktok.com/ZMBkwJ4Vo/",
    },
    {
      id: 2,
      title: "Tech careers without Math",
      videoUrl: "https://www.tiktok.com/embed/YOUR_VIDEO_ID_HERE",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>My Tutorials</h1>
      <p className={styles.blogDescription}>Tech And Teach with Miss Lucy!</p>
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} title={post.title} videoUrl={post.videoUrl} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
