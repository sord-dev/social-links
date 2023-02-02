import React, { useEffect } from "react";
import styles from "../styles/Error.module.css";

import { HoverAnimation } from "../components/animations";
import { useRouter } from "next/router";

function Error() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.error}>
      <HoverAnimation float={[2, 1, 4]}>
        <h1>Where are you trying to get to?</h1>
        <p>Redirecting you in 3 seconds...</p>
      </HoverAnimation>
    </div>
  );
}

export default Error;
