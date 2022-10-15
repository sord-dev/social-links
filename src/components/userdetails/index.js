import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

export function UserDetails({ me }) {
  const { uid, name, description, thumbnail } = me;
  const copyNameToKeyboard = (name, uid) =>
    navigator.clipboard.writeText(`${name}#${uid}`);

  return (
    <div className={styles.userDetails}>
      <Image src={thumbnail} width={125} height={125} alt={`${name}'s profile picture`} />
      <div
        className={styles.nameDisplay}
        onClick={() => copyNameToKeyboard(name, uid)}
      >
        <p className={styles.tag}>{`${name}#${uid}`}</p>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}
