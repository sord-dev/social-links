import styles from "./index.module.css";

export function LinkGrid({ links = [] }) {
  return (
    <div className={styles.grid}>
      {links.map((link) => (
        <LinkItem className={styles.item} key={link.tag} {...{ link }} />
      ))}
    </div>
  );
}

function LinkItem({ link }) {
  return (
    <a
      className={styles.item}
      href={link.src}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.tag}
    </a>
  );
}
