import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Cart, Layout } from '@components';
// import { StateContext } from '@context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cart />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
