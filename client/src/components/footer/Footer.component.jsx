import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/footer-logo.png'
import {WhatsappShareButton,FacebookShareButton, TwitterShareButton, FacebookIcon, WhatsappIcon, TwitterIcon} from 'react-share'

import {useSelector} from 'react-redux'

const Footer = () =>{ 

    const {categories} = useSelector((state) =>  state.categoryReducer)

    return (
    <footer className="footer_dark">
	<div className="pt-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                	<div className="widget">
                        <div className="footer_logo s-50">
                            <a  href="#!"><img src={logo} alt="logo"/></a>
                        </div>
                        <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                    </div>
                    <div className="widget">
                        <ul className="social_icons social_white">
                            <li>
                            <FacebookShareButton url={window.location.href}>
                                <FacebookIcon size={20} round={true} />
                            </FacebookShareButton>
                            </li>
                            <li>
                            <WhatsappShareButton url={window.location.href}>
                                <WhatsappIcon size={20} round={true} />
                            </WhatsappShareButton>
                            </li>
                            <li>
                            <TwitterShareButton url={window.location.href}>
                                <TwitterIcon size={20} round={true} />
                            </TwitterShareButton>
                            </li>
                        </ul>
                    </div>
        		</div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">Useful Links</h6>
                        <ul className="widget_links">
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/contact">Location</Link></li>
                            <li><Link to="/checkout">CheckOut</Link></li>
                            {/* <li><a href="#!">Contact</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">Category</h6>
                        {categories.filter((data, idx) => idx < 5).map((category) => (
                            <ul key={category._id} className="widget_links">
                                <li><a href="#!">{category.description}</a></li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">My Account</h6>
                        <ul className="widget_links">
                            <li><Link to="/account">My Account</Link></li>
                            <li><a href="#!">Returns</a></li>
                            <li><Link to="/account">Orders History</Link></li>
                            <li><Link to="/account">Order Tracking</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">Contact Info</h6>
                        <ul className="contact_info contact_info_light">
                            <li>
                                <i className="ti-location-pin"></i>
                                <p>Benin City, Edo State, Nigeria</p>
                            </li>
                            <li>
                                <i className="ti-email"></i>
                                <a href="mailto:Eronsval001@gmail.com">Eronsval001@gmail.com</a>
                            </li>
                            <li>
                                <i className="ti-mobile"></i>
                                <p>+(234) 813 486 6263</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bottom_footer border-top-tran">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="mb-md-0 text-center text-md-left">© 2020 All Rights Reserved by Fecoded</p>
                </div>
             
            </div>
        </div>
    </div>
</footer>
)}

export default Footer