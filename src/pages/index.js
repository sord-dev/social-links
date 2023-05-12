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

const links = [
  { src: "https://github.com/sord-dev", tag: "Github" },
  { src: "https://linkedin.com/in/stefansyrett/", tag: "LinkedIn" },
  { src: "mailto:stefansyrett17@gmail.com", tag: "Email" },
  { src: "https://docs.google.com/document/d/1YgO4AhYtWiec13T5Vxv4zgl8o1S-_MzFJfERLmmYk0Q/edit?usp=sharing", tag: "CV" },
  { src: "http://www.patience-is-a-virtue.org", tag: "Discord" },
];

const projects = [
  {
    id: "c740bec6-a3bc-11ed-a8fc-0242ac120002",
    tech: "Nextjs, TypeScript, Google Books API",
    thumbnail: "https://i.postimg.cc/gJ4npY3W/value-books.png",
    name: "High Value Books",
    description:
      "A repository with all the books I've seen recommended by successful people. With searching and recommendation capabilities.",
    code: "https://github.com/sord-dev/adonislibrary",
    websiteUrl: "https://adonislibrary.vercel.app",
  },
  {
    id: "c740c8ee-a3bc-11ed-a8fc-0242ac120002",
    tech: "Nextjs, JavaScript, framer-motion",
    thumbnail: "https://i.postimg.cc/D0Zmytcb/makeup-portfolio.png",
    name: "Makeup Artist Portfolio",
    description:
      "Makeup Artist portfolio created for Freelance work, showcasing the makeup and photoshoots the client has done.",
    code: "https://github.com/sord-dev/Ashleigh-Lavery",
    websiteUrl: "https://ashleigh-lavery.vercel.app",
  },
  {
    id: "c740cace-a3bc-11ed-a8fc-0242ac120002",
    tech: "React, JavaScript, Design, OpenAI, Team Project",
    thumbnail: "https://user-images.githubusercontent.com/75338985/238082082-4a8c6c35-3953-41d2-b80e-e4088328779e.png",
    name: "SerenityAI",
    description:
      "A mental health application catered towards people who struggle with accountability and people who just want to hear a second opinion from a guide/therapist-like AI.",
    code: "https://github.com/sord-dev/mental-health-server",
    websiteUrl: "https://serenity-ai.netlify.app/authenticate/register",
  },
];

const SEOConfig = {
  title: "Stefan Syrett | ReactJs Developer",
  description:
    "Just a developer/designer trying to provide value! I enjoy solving business and specific problems, and strive to become better at doing so continually.",
  icon: "/bitmoji-wink.png",
};

export default function Home() {
  const { modalActive, modalCard } = useContext(ModalContext);

  return (
    <ParticleBackground>
      <FadeInAnimation>
        <SEO {...SEOConfig} />
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
