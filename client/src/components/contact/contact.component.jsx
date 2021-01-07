import React, {Fragment} from 'react'

const Contact  = () => {
    return (
        <Fragment>
            
        <div className="main_content">

        <div className="section bg_light_blue2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="heading_s1 text-center">
                            <h2>Contact Us</h2>
                        </div>
                        <p className="text-center leads">Thank you so much. Do feel free to reach us via our contact details displayed below. <span role="img" aria-label="">❤️</span></p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="icon_box_style4 box_shadow1">
                            <div className="icon">
                                <i className="ti-location-pin"></i>
                            </div>
                            <div className="icon_box_content">
                                <h5>Location</h5>
                                <p>Auchi, Edo State, Nigeria</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="icon_box icon_box_style4 box_shadow1">
                            <div className="icon">
                                <i className="ti-mobile"></i>
                            </div>
                            <div className="icon_box_content">
                                <h5>Mobile </h5>
                                <p>+(234) 813 486 6263</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="icon_box icon_box_style4 box_shadow1">
                            <div className="icon">
                                <i className="ti-email"></i>
                            </div>
                            <div className="icon_box_content">
                                <h5>Email Address</h5>
                                <p>estore@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>

        </Fragment>
    )
}

export default Contact