import React from "react";
import styles from "./index.module.css";

import { useContext } from "react";
import { ModalContext } from "../../utils/contexts/modalContext";

export function Modal({ modalCard }) {
  const { closeModal } = useContext(ModalContext);
  const { tech, thumbnail, name, descriptioncode, websiteUrl } = modalCard;

  return (
    <div className={styles.modalBg} onClick={() => closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt="banner image" draggable={false} />
        </div>

        <div className={styles.content}>
          <p>{tech}</p>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
