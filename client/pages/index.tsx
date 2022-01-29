import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer, Navbar, Services, Transactions, Welcome } from '../components';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transactions></Transactions>
      <Footer></Footer>
    </div>
  );
};

export default Home;
