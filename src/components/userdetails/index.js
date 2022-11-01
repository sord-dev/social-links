import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

import Tippy from "@tippyjs/react";
import { copyNameToKeyboard } from "../../utils";

import { HoverBounceAnimation, HoverAnimation } from "../animations";

export function UserDetails({ me = {} }) {
  if (Object.keys(me).length < 1) return <div>loading...</div>;
  const { uid, name, description, thumbnail } = me;
  return (
    <div className={styles.userDetails}>
    <HoverAnimation>
      <Image
        src={thumbnail}
        width={140}
        height={140}
        alt={`${name}'s profile picture`}
      />
      </HoverAnimation>
      <NameDisplay {...{ name, uid }} />
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}

function NameDisplay({ name, uid }) {
  return (
    <HoverBounceAnimation>
      <div
        className={styles.nameDisplay}
        onClick={() => copyNameToKeyboard(name, uid)}
      >
        <Tippy
          trigger="click"
          placement="bottom"
          content={
            <div className={styles.tooltip}>Discord copied to clipboard!</div>
          }
        >
          <p className={styles.tag}>{`${name}#${uid}`}</p>
        </Tippy>
      </div>
    </HoverBounceAnimation>
  );
}
