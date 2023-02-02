import {
  UserDetails,
  LinkGrid,
  ParticleBackground,
  SEO,
  FadeInAnimation,
} from "../components";
import styles from "../styles/Home.module.css";

const links = [
  { src: "https://github.com/sord-dev", tag: "Github" },
  { src: "https://linkedin.com/in/stefansyrett/", tag: "LinkedIn" },
  { src: "mailto:stefansyrett17@gmail.com", tag: "Email" },
  { src: "https://linkedin.com/in/stefansyrett/", tag: "CV" },
  { src: "http://www.patience-is-a-virtue.org", tag: "Discord" },
];

const SEOConfig = {
  title: "Stef | JS Developer",
  descrption: "My Developer portfolio.",
  icon: "/bitmoji-wink.png",
};

export default function Home() {
  return (
    <ParticleBackground>
      <FadeInAnimation>
        <div className={styles.container}>
          <SEO {...SEOConfig} />
          <div className={styles.main}>
            <UserDetails />
            {/* <Carousel3D items={...{ projects }} /> */}
            <LinkGrid {...{ links }} />
          </div>
        </div>
      </FadeInAnimation>
    </ParticleBackground>
  );
}
