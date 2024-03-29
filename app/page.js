import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Fade-in Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-6xl font-bold animate-fade-in">
           Animation
        </h1>
      </main>
    </div>
  );
};

export default Home;
