import Head from "next/head";
import styles from "../styles/Home.module.css";

import data from "../../data.json";
import { UserDetails, LinkList } from "../components";

// selecting me from the json file.
// (yeah i'm looping through all the users, but theres only one so it doesn't matter right now)

export default function Home({ me }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sordid</title>
        <meta name="description" content="sordid is making a link page..." />
        <link rel="icon" href="/test.svg" />
      </Head>

      <div className={styles.main}>
        <UserDetails {...{ me }} />
        <LinkList links={me.links} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const users = data.users;
  const me = users.filter((user) => user.uid === "4761")[0];

  return {
    props: { me },
  };
}
