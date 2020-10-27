import React from 'react';

import Navbar from '../../components/navbar';
import Carousel from '../../components/slider';
import Thumbnails from '../../components/thumbnails';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Thumbnails />
    </div>
  );
};

export default HomePage;
