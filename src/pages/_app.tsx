import type { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat/latin.css";
import Layout from "common/components/Common/Layout";
import "common/styles/globals.css";
import fxdTheme from "common/styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Foxtrot Command Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/fonts/impact.ttf" as="font" crossOrigin="" />
        <link
          rel="preload"
          href="/fonts/Inversionz Unboxed.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <ChakraProvider resetCSS theme={fxdTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
