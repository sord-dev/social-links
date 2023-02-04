import React from "react";
import styles from "./index.module.css";

import { useContext } from "react";
import { ModalContext } from "../../utils/contexts/modalContext";
import { LinkBtn } from "../btnlink";
import Link from "next/link";
import Image from "next/image";

export function Modal({ modalCard }) {
  const { closeModal } = useContext(ModalContext);
  const { tech, thumbnail, name, description, code, websiteUrl } = modalCard;

  return (
    <div className={styles.modalBg} onClick={() => closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div
          className={styles.thumbnail}
          position="relative"
        >
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Image
              loading="lazy"
              layout="fill"
              src={thumbnail}
              alt="banner image"
              draggable={false}
            />
          </a>
        </div>

        <div className={styles.content}>
          <p>{tech}</p>
          <h2>{name}</h2>
          <p>{description}</p>

          <div className={styles.actionGroup}>
            <p className={styles.dismiss} onClick={() => closeModal()}>
              Dismiss
            </p>

            <div className={styles.buttons}>
              <LinkBtn tag={"Code"} href={code} />
              <LinkBtn tag={"Website"} href={websiteUrl} primary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
