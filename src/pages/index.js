import {
  UserDetails,
  LinkGrid,
  ParticleBackground,
  SEO,
  FadeInAnimation,
  ProjectCarousel,
  Modal,
} from "../components";
import { useContext } from "react";
import { ModalContext } from "../utils/contexts/modalContext";
import styles from "../styles/Home.module.css";

import data from '../utils/config.json'
const { links, projects, seoConfig } = data;

export default function Home() {
  const { modalActive, modalCard } = useContext(ModalContext);

  return (
    <ParticleBackground>
      <FadeInAnimation>
        <SEO {...seoConfig} />
        <div className={styles.container}>
          {modalActive && <Modal {...{ modalCard }} />}
          <div className={styles.main}>
            <UserDetails />
            <ProjectCarousel {...{ projects }} />
            <LinkGrid {...{ links }} />
          </div>
        </div>
      </FadeInAnimation>
    </ParticleBackground>
  );
}
