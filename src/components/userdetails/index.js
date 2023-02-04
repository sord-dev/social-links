import React from "react";
import styles from "./index.module.css";

import { HoverAnimation } from "../animations";

export function UserDetails() {
  return (
    <div className={styles.userDetails}>
      <HoverAnimation>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"/stef.png"}
          width={120}
          height={120}
          alt={`Stefan's profile picture`}
          draggable={"false"}
        />
      </HoverAnimation>
      <div className={styles.details}>
        <h1 className={styles.name}>
          <span className={styles.purp}>Stef</span>an Syrett
        </h1>
        <p>JavaScript Developer</p>
      </div>

      <p className={styles.description}>
        Just a developer/designer trying to provide value c: <br /> I enjoy
        solving business and specific problems, and strive to become better at
        doing so continually.
      </p>
    </div>
  );
}
