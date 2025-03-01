import React from "react";
import styles from "./BlogCard.module.css";

function BlogCard({ title, date, category, description }) {
  return (
    <div className={styles.blogCard}>
      <h3>{title}</h3>
      <p className={styles.meta}>
        {date} | <span className={styles.category}>{category}</span>
      </p>
      <p className={styles.description}>{description}</p>
      <hr />
    </div>
  );
}

export default BlogCard;
