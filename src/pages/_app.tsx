import type { AppProps } from 'next/app'
import Head from 'next/head';
import '@fontsource/montserrat/latin.css';
import { ChakraProvider } from "@chakra-ui/react";
import fxdTheme from "styles/theme";
import Layout from 'Components/Common/Layout';
import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider resetCSS theme={fxdTheme}>
        <Head>
          <title>Foxtrot Command Dashboard</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="preload"
            href="/fonts/impact.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inversionz Unboxed.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App