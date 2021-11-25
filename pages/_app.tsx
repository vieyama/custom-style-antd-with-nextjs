import type { AppProps } from "next/app";
import "styles/variables.less";
import "styles/style.sass";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
