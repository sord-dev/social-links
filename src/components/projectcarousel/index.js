import React, { useState } from "react";
import styles from "./index.module.css";
import { useContext } from "react";
import { ModalContext } from "../../utils/contexts/modalContext";
import { CarouselCard } from "../carouselcard";

export function ProjectCarousel({ projects = [] }) {
  const [activeCard, setActiveCard] = useState(0);
  const { setModalCard } = useContext(ModalContext);

  if (!projects.length || projects.length < 3 || projects.length > 3) {
    return (
      <CarouselError message="ProjectCarousel error, not enough or too many elements" />
    );
  }

  const mod = (n, m) => {
    const result = n % m;
    return result >= 0 ? result : result + m;
  };

  return (
    <div className={styles.carousel}>
      {projects.map((project, i) => {
        const leftIndex = mod(activeCard - 1, projects.length);
        const rightIndex = mod(activeCard + 1, projects.length);
        let classname = "";

        if (i === activeCard) {
          classname = `${styles.card} ${styles.active}`;
        } else if (i === rightIndex) {
          classname = `${styles.card} ${styles.right}`;
        } else if (i === leftIndex) {
          classname = `${styles.card} ${styles.left}`;
        } else {
          classname = `${styles.card}`;
        }

        return (
          <CarouselCard
            key={project.id}
            index={i}
            {...{ project, classname, setActiveCard, activeCard, setModalCard }}
          />
        );
      })}
    </div>
  );
}

function CarouselError({ message }) {
  return <div>{message}</div>;
}
