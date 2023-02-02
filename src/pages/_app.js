import { FadeInAnimation } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FadeInAnimation>
      <Component {...pageProps} />
    </FadeInAnimation>
  );
}

export default MyApp;
