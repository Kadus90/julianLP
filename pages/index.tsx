import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JulianLP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>hello world</h1>
      </div>
    </div>
  );
}
