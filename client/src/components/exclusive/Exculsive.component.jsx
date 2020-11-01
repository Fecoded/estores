import React from 'react'

const ExclusiveItem = () => {
    return(
        <div className="section small_pt pb_70">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-md-6">
            	<div className="heading_s1 text-center">
                	<h2>Exclusive Products</h2>
                </div>
            </div>
		</div>
        <div className="row">
        	<div className="col-12">
            	<div className="tab-style1">
                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="arrival-tab" data-toggle="tab" href="#arrival" role="tab" aria-controls="arrival" aria-selected="true">New Arrival</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="sellers-tab" data-toggle="tab" href="#sellers" role="tab" aria-controls="sellers" aria-selected="false">Best Sellers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="special-tab" data-toggle="tab" href="#special" role="tab" aria-controls="special" aria-selected="false">Special Offer</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                	<div className="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                        <div className="row shop_container">
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img1.jpg"} alt="product_img1"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                                        <div className="product_price">
                                            <span className="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-80"></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img2.jpg"} alt="product_img2"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">Lether Gray Tuxedo</a></h6>
                                        <div className="product_price">
                                            <span className="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div className="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-68"></div>
                                            </div>
                                            <span className="rating_num">(15)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#847764"></span>
                                                <span data-color="#0393B5"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <span className="pr_flash">New</span>
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img3.jpg"} alt="product_img3"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">woman full sliv dress</a></h6>
                                        <div className="product_price">
                                            <span className="price">$68.00</span>
                                            <del>$99.00</del>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-87"></div>
                                            </div>
                                            <span className="rating_num">(25)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#7C502F"></span>
                                                <span data-color="#2F366C"></span>
                                                <span data-color="#874A3D"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img4.jpg"} alt="product_img4"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                                        <div className="product_price">
                                            <span className="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-70"></div>
                                            </div>
                                            <span className="rating_num">(22)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#A92534"></span>
                                                <span data-color="#B9C2DF"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img5.jpg"} alt="product_img5"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                                        <div className="product_price">
                                            <span className="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-80"></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#5FB7D4"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <span className="pr_flash bg-danger">Hot</span>
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img6.jpg"} alt="product_img6"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                                        <div className="product_price">
                                            <span className="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div className="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-68"></div>
                                            </div>
                                            <span className="rating_num">(15)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <span className="pr_flash bg-success">Sale</span>
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img7.jpg"} alt="product_img7"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                                        <div className="product_price">
                                            <span className="price">$68.00</span>
                                            <del>$99.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-87"></div>
                                            </div>
                                            <span className="rating_num">(25)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#7C502F"></span>
                                                <span data-color="#2F366C"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL +"assets/images/product_img8.jpg"} alt="product_img8"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">Men blue jins Shirt</a></h6>
                                        <div className="product_price">
                                            <span className="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-70"></div>
                                            </div>
                                            <span className="rating_num">(22)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#444653"></span>
                                                <span data-color="#B9C2DF"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    
                    <div className="tab-pane fade" id="special" role="tabpanel" aria-labelledby="special-tab">
                        <div className="row shop_container">
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img4.jpg"} alt="product_img4"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                                        <div className="product_price">
                                            <span className="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-70"></div>
                                            </div>
                                            <span className="rating_num">(22)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#A92534"></span>
                                                <span data-color="#B9C2DF"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img9.jpg"} alt="product_img9"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">T-Shirt Form Girls</a></h6>
                                        <div className="product_price">
                                            <span className="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-80"></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#B5B6BB"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img8.jpg"} alt="product_img8"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">Men Checks Casual Shirt</a></h6>
                                        <div className="product_price">
                                            <span className="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-70"></div>
                                            </div>
                                            <span className="rating_num">(22)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#444653"></span>
                                                <span data-color="#B9C2DF"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <span className="pr_flash">New</span>
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img1.jpg"} alt="product_img1"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                                        <div className="product_price">
                                            <span className="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-80"></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img12.jpg"} alt="product_img12"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <span className="pr_flash bg-danger">Hot</span>
                                        <h6 className="product_title"><a href="shop-product-detail.html">Black T-shirt for woman</a></h6>
                                        <div className="product_price">
                                            <span className="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-70"></div>
                                            </div>
                                            <span className="rating_num">(22)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#1B1B25"></span>
                                                <span data-color="#444653"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img6.jpg"} alt="product_img6"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                                        <div className="product_price">
                                            <span className="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div className="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-68"></div>
                                            </div>
                                            <span className="rating_num">(15)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <span className="pr_flash bg-success">Sale</span>
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img7.jpg"} alt="product_img7"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                                        <div className="product_price">
                                            <span className="price">$68.00</span>
                                            <del>$99.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-87"></div>
                                            </div>
                                            <span className="rating_num">(25)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#7C502F"></span>
                                                <span data-color="#2F366C"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={process.env.PUBLIC_URL + "assets/images/product_img11.jpg"} alt="product_img11"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#!"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#!"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">Black dress for woman</a></h6>
                                        <div className="product_price">
                                            <span className="price">$68.00</span>
                                            <del>$99.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate w-87"></div>
                                            </div>
                                            <span className="rating_num">(25)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#090909"></span>
                                                <span data-color="#AC644D"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
    )
}

export default ExclusiveItem