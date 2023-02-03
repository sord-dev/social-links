import React, { useState } from "react";
import styles from "./index.module.css";

export function ProjectCarousel({ projects = [] }) {
  const [activeCard, setActiveCard] = useState(0);
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
            {...{ project, classname, setActiveCard }}
          />
        );
      })}
    </div>
  );
}

function CarouselCard({ project, setActiveCard = () => {}, classname, index }) {
  const techArr = project.tech;
  return (
    <div onClick={() => setActiveCard(index)} className={classname}>
      <CardTechList {...{ techArr }} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

function CardTechList({ techArr = [] }) {
  if (!techArr.length) return;
  return (
    <span>
      {techArr.map((tag, i) => {
        if (i === techArr.length - 1) return <>{tag}</>;
        return <>{tag}, </>;
      })}
    </span>
  );
}

function CarouselError({ message }) {
  return <div>{message}</div>;
}
