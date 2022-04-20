import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat/latin.css';
import "./../App.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp