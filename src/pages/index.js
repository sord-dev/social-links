import {
  UserDetails,
  LinkGrid,
  ParticleBackground,
  SEO,
  FadeInAnimation,
  ProjectCarousel,
} from "../components";
import styles from "../styles/Home.module.css";

const links = [
  { src: "https://github.com/sord-dev", tag: "Github" },
  { src: "https://linkedin.com/in/stefansyrett/", tag: "LinkedIn" },
  { src: "mailto:stefansyrett17@gmail.com", tag: "Email" },
  { src: "https://linkedin.com/in/stefansyrett/", tag: "CV" },
  { src: "http://www.patience-is-a-virtue.org", tag: "Discord" },
];

const projects = [
  {
    id: "c740bec6-a3bc-11ed-a8fc-0242ac120002",
    tech: ["Nextjs", "TypeScript", "Google Books API"],
    name: "High Value Books",
    description:
      "A repository with all the books I've seen recommended by successful people. With searching and recommendation capabilities.",
  },
  {
    id: "c740c8ee-a3bc-11ed-a8fc-0242ac120002",
    tech: ["Nextjs", "JavaScript", "framer-motion"],
    name: "Makeup Artist Portfolio",
    description:
      "A Version 4 UUID is a universally unique identifier that is generated using random numbers. The Version 4 UUIDs produced by this site were generated using a secure random number generator.",
  },
  {
    id: "c740cace-a3bc-11ed-a8fc-0242ac120002",
    tech: ["Nextjs", "JavaScript"],
    name: "Mindblowing NextJS Blog",
    description:
      "A Version 4 UUID is a universally unique identifier that is generated using random numbers. The Version 4 UUIDs produced by this site were generated using a secure random number generator.",
  },
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
          <SEO {...SEOConfig} />
        <div className={styles.container}>
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
