import React, { useEffect } from "react";
import styles from "../styles/Error.module.css";

import { FadeInAnimation, HoverAnimation } from "../components/animations";
import { ParticleBackground } from "../components";
import { useRouter } from "next/router";

function Error() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ParticleBackground>
      <FadeInAnimation>
        <div className={styles.error}>
          <HoverAnimation float={[2, 1, 4]}>
            <h1>Where are you trying to get to?</h1>
            <p>Redirecting you in 3 seconds...</p>
          </HoverAnimation>
        </div>
      </FadeInAnimation>
    </ParticleBackground>
  );
}

export default Error;
