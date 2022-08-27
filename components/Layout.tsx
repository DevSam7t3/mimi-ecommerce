import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import NavBar from './NavBar';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>mimi store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
