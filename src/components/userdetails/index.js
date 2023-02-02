import React from "react";
import styles from "./index.module.css";

import { HoverAnimation } from "../animations";

export function UserDetails({ me = {} }) {
  if (Object.keys(me).length < 1) return <div>loading...</div>;
  const { name, thumbnail } = me;
  return (
    <div className={styles.userDetails}>
      <HoverAnimation>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={thumbnail}
          width={120}
          height={120}
          alt={`${name}'s profile picture`}
          draggable={"false"} />
      </HoverAnimation>
      <div className={styles.details}>
        <h1 className={styles.name}>
          <span className={styles.purp}>Stef</span>an Syrett
        </h1>
        <p>Javascript Developer</p>
      </div>

      <p className={styles.description}>
        Just a developer/designer trying to provide value c: <br /> I enjoy
        solving business and specific problems, and strive to become better at
        doing so continually.
      </p>
    </div>
  );
}
