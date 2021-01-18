import React from 'react'
import {Link} from 'react-router-dom'
import banner1 from '../../assets/banner.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

const Banner = () => (
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
    <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active background_bg" style={{ backgroundImage: `url(${banner1})`}}>
                <div className="banner_slide_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-9">
                                <div className="banner_content overflow-hidden">
                                	<h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Get up to 50% off Today Only!</h5>
                                    <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Woman Fashion</h2>
                                    <Link className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" to='/shops' data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item background_bg" style={{ backgroundImage: `url(${banner2})`}}>
                <div className="banner_slide_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner_content overflow-hidden">
                                	<h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">50% off in all products</h5>
                                    <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Man Fashion</h2>
                                    <Link className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" to='/shops' data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item background_bg" style={{ backgroundImage: `url(${banner3})`}}>
                <div className="banner_slide_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner_content overflow-hidden">
                                	<h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Taking your Viewing Experience to Next Level</h5>
                                    <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Summer Sale</h2>
                                    <Link className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" to='/shops' data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><i className="ion-chevron-left"></i></a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><i className="ion-chevron-right"></i></a>
    </div>
</div>
)

export default Banner