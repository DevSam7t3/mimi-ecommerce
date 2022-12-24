import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Cart, Layout } from "@components";
import { StateProvider } from "@context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Cart />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
