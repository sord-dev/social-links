import Head from "next/head";
import styles from "../styles/Home.module.css";

import data from "../../data.json";
import { UserDetails, LinkList, ParticleBackground } from "../components";

export default function Home({ me }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sordid</title>
        <meta name="description" content="sordid is making a link page..." />
        <link rel="icon" href="/test.svg" />
      </Head>

      <ParticleBackground>
        <div className={styles.main}>
          <UserDetails {...{ me }} />
          <LinkList links={me.links} />
        </div>
      </ParticleBackground>
    </div>
  );
}

export async function getStaticProps(ctx) {
  // selecting me from the json file.
  // (yeah, i'm looping through all the users. But theres only one so it doesn't matter right now)
  const {users} = data;

  const me = users[0];

  return {
    props: { me },
  };
}
