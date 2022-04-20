import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat/latin.css';
import "./../App.css";
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FXD - Card Maker</title>
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
      <Component {...pageProps} />
    </>
  )
}

export default App