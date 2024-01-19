import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Animated Text</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-6xl font-bold animate-bounce">
          Animation
        </h1>
      </main>
    </div>
  );
};

export default Home;
