import React from 'react'

const FeaturedItem = () => {
    return(
        <div className="section">
	<div className="container">
    	<div className="row justify-content-center">
			<div className="col-md-6">
            	<div className="heading_s1 text-center">
                	<h2>Featured Products</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            	<div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
                	<div className="item">
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
                            </div>
                        </div>
                    </div>
                    <div className="item">
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
                            </div>
                        </div>
                    </div>
                    <div className="item">
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
                    <div className="item">
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
                    <div className="item">
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
                </div>
            </div>
		</div>
    </div>
</div>
    )
}

export default FeaturedItem