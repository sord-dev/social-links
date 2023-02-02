import Head from "next/head";
import styles from "../styles/Home.module.css";

import data from "../../data.json";
import { UserDetails, LinkGrid, ParticleBackground } from "../components";

export default function Home({ me }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Links</title>
        <meta
          name="description"
          content="an embelishment on linktree backgrounds..."
        />
        <link rel="icon" href="/bitmoji-wink.png" />
      </Head>

      <ParticleBackground>
        <div className={styles.main}>
          <UserDetails {...{ me }} />
          <LinkGrid />
        </div>
      </ParticleBackground>
    </div>
  );
}

export async function getStaticProps(ctx) {
  // selecting me from the json file.
  const { user } = data;
  const me = user;

  return {
    props: { me },
  };
}
