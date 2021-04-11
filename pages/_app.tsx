import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // eslint-disable-line react/jsx-props-no-spreading
}

export default MyApp;
