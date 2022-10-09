import React from "react";
import styles from "./index.module.css";

export function LinkList({ links = [] }) {
  return (
    <div className={styles.linkList}>
      {links.map((link) => (
        <p key={link.href}>{link.title}</p>
      ))}
    </div>
  );
}
