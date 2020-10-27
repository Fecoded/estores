import React from 'react';

import img1 from '../../assets/img.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Carousel = () => {
  return (
    <div className='container'>
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={img1} className='d-block w-100 carousel-img' alt='' />
          </div>
          <div className='carousel-item'>
            <img src={img2} className='d-block w-100 carousel-img' alt='' />
          </div>
          <div className='carousel-item'>
            <img src={img3} className='d-block w-100 carousel-img' alt='' />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
