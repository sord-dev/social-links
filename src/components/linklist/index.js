import React from "react";
import { LinkItem } from "../linkitem";
import styles from "./index.module.css";

export function LinkList({ links = [] }) {
  return (
    <div className={styles.linkList}>
      {links.map((link) => (
        <LinkItem key={link.href} title={link.title} href={link.href} />
      ))}
    </div>
  );
}
