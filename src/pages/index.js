import styles from "../styles/Home.module.css";

import data from "../../data.json";
import { UserDetails, LinkGrid, ParticleBackground, SEO } from "../components";

const links = [
  { src: "https://github.com/sord-dev", tag: "Github" },
  { src: "https://linkedin.com/in/stefansyrett/", tag: "LinkedIn" },
  { src: "mailto:stefansyrett17@gmail.com", tag: "Email" },
  { src: "https://linkedin.com/in/stefansyrett/", tag: "CV" },
  { src: "http://www.patience-is-a-virtue.org", tag: "Discord" },
];

const SEOConfig = {
  title: "Social Links",
  descrption: "an embelishment on linktree backgrounds...",
  icon: "/bitmoji-wink.png",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO {...SEOConfig} />
      <ParticleBackground>
        <div className={styles.main}>
          <UserDetails />
          {/* <Carousel3D items={...{ projects }} /> */}
          <LinkGrid {...{ links }} />
        </div>
      </ParticleBackground>
    </div>
  );
}
