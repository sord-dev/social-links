import Link from "next/link";
import styles from './index.module.css'

export function LinkBtn({ tag, href, primary = false }) {
  const className = primary
    ? `${styles.button} ${styles.primary}`
    : `${styles.button}`;
  return (
    <Link {...{ href }} target="_blank" rel="noopener noreferrer">
      <button {...{ className }}>{tag}</button>
    </Link>
  );
}
