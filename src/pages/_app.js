import "../styles/globals.css";

import { ModalContextProvider } from "../utils/contexts/modalContext";

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  );
}

export default MyApp;
