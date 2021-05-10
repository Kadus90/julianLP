import { FC } from 'react';
import Head from 'next/head';

const Home: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <Head>
        <title>JulianLP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p>hello world</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
