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
  { src: "https://linkedin.com/in/stefansyrett/", tag: "CV" },
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
    tech: "Nextjs, JavaScript, Design",
    thumbnail: "https://i.postimg.cc/QtjHvB9m/freelance-blog.png",
    name: "NextJS Blog",
    description:
      "Next,js SSR Markdown blog I created for more practice deisgning and implimenting some functionality with javascript.",
    code: "https://github.com/sord-dev/nextjs-markdown-blog-ssr",
    websiteUrl: "https://portfolio-update-lyart.vercel.app",
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
