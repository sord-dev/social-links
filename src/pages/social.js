import Head from "next/head";
import styles from "../styles/Home.module.css";

import data from "../../data.json";
import { UserDetails, LinkList, ParticleBackground, FadeInAnimation } from "../components";

export default function Home({ me }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Links</title>
        <meta
          name="description"
          content="an embelishment on linktree backgrounds..."
        />
        <link rel="icon" href="/test.svg" />
      </Head>
      <ParticleBackground>
        <FadeInAnimation>
          <div className={styles.main}>
            <UserDetails {...{ me }} />
            <LinkList links={me.links} />
          </div>
        </FadeInAnimation>
      </ParticleBackground>
    </div>
  );
}

export async function getStaticProps(ctx) {
  // selecting me from the json file.
  const { social } = data;
  const me = social;

  return {
    props: { me },
  };
}
