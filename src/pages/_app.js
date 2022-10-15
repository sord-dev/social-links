import { ParticleBackground } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ParticleBackground>
      <Component {...pageProps} />
    </ParticleBackground>
  );
}

export default MyApp;
