import React from "react";
import styles from "./BlogCard.module.css";

function BlogCard({ title, videoUrl }) {
  return (
    <div className={styles.blogCard}>
      <h2>{title}</h2>
      <iframe
        src={videoUrl}
        width="325"
        height="575"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
}

export default BlogCard;
