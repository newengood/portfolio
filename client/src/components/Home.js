import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

function Home() {
  return (
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <Navigation />
        <Footer />
      </div>

  );
};

export default Home;
