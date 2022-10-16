import React from "react";
import { ParticleBackground } from "../components";
import styles from "../styles/users.module.css";

import data from '../../data.json'

function Users({ users }) {
    
  return (
    <>
      <ParticleBackground>
        <div className={styles.main}>
          <div>searchbar</div>

          <div>{users.map(user => <p key={user.uid}>{user.name}</p>)}</div>
        </div>
      </ParticleBackground>
    </>
  );
}

export async function getStaticProps(ctx) {
    const users = data.users;
  return {
    props: { users },
  };
}

export default Users;
