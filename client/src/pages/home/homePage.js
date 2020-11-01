import React from 'react';

import Header from '../../components/header/Headers.component'
import Banner from '../../components/banner/Banner.component'
import Footer from '../../components/footer/Footer.component'
import Featured from '../../components/featured/Featured.component'
import Exclusive from '../../components/exclusive/Exculsive.component'

const HomePage = () => {
  return (
    <div>
     <Header />
     <Banner />
     <Featured />
     <Exclusive />
     <Footer />
    </div>
  );
};

export default HomePage;
