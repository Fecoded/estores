import React from 'react';

import img1 from '../../assets/img.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Thumbnails = () => (
  <div className='container'>
    <h4 className='my-3'>Latest Collections</h4>
    <div className='row blog'>
      <div className='col-md-12'>
        <div id='blogCarousel' className='carousel slide' data-ride='carousel'>
          <ol className='carousel-indicators'>
            <li
              data-target='#blogCarousel'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#blogCarousel' data-slide-to='1'></li>
          </ol>

          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='row'>
                <div className='col-md-2'>
                  <img src={img1} alt='' className='img-width' />
                  <p className='lead'>Pink Clothes</p>
                </div>
                <div className='col-md-2'>
                  <img src={img2} alt='' className='img-width' />
                </div>
                <div className='col-md-2'>
                  <img src={img3} alt='' className='img-width' />
                </div>

                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
              </div>
            </div>

            <div className='carousel-item'>
              <div className='row'>
                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
                <div className='col-md-2'>
                  <img
                    src='http://placehold.it/250x250'
                    alt=''
                    className='img-width'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Thumbnails;
