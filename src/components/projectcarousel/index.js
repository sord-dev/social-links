import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../utils/contexts/modalContext";
import { CarouselCard } from "../carouselcard";
import { useIncriment } from "../../utils/hooks/useIncriment";
import styles from "./index.module.css";

export function ProjectCarousel({ projects = [] }) {
  const [activeCard, setActiveCard] = useState(0);
  const { setModalCard, modalActive } = useContext(ModalContext);
  const { count, setCount } = useIncriment(4, projects.length - 1);

  // on each tick of the count, update the active card. unless the modal is active.
  useEffect(() => {
    if (modalActive) return;
    setActiveCard(count);
  }, [count, modalActive]);

  // if the user manually changes the card, set the count to the active card.
  useEffect(() => {
    setCount(activeCard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  if (projects.length !== 3)
    return (
      <CarouselError message="ProjectCarousel error, not enough or too many elements" />
    );

  const mod = (n, m) => {
    const result = n % m;
    return result >= 0 ? result : result + m;
  };

  return (
    <>
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
              {...{
                project,
                classname,
                setActiveCard,
                activeCard,
                setModalCard,
              }}
            />
          );
        })}
      </div>

      <DotTracker
        {...{ projectsLeng: projects.length, activeCard, setActiveCard }}
      />
    </>
  );
}

// renders out dots to allow control of the carousel in more than one way.
function DotTracker({ projectsLeng, activeCard, setActiveCard }) {
  // just a fancy way to map items from an index instead of an array
  return (
    <div className={styles.dotGroup}>
      {Array.from({ length: projectsLeng }, (item, index) => {
        const className =
          activeCard == index
            ? `${styles.dot} ${styles.active}`
            : `${styles.dot}`;
        return (
          <div
            {...{ className }}
            key={index}
            onClick={() => setActiveCard(index)}
          ></div>
        );
      })}
    </div>
  );
}

function CarouselError({ message }) {
  return <div>{message}</div>;
}
