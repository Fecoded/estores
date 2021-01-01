import React from "react";

const Shop = () => {
  return (
    <div className="main_content">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center mb-4 pb-1">
                <div className="col-12">
                  <div className="product_header">
                    <div className="product_header_left">
                      <div className="custom_select">
                        <select className="form-control form-control-sm">
                          <option value="order">Default sorting</option>
                          <option value="popularity">Sort by popularity</option>
                          <option value="date">Sort by newness</option>
                          <option value="price">
                            Sort by price: low to high
                          </option>
                          <option value="price-desc">
                            Sort by price: high to low
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="product_header_right">
                      <div className="products_view">
                        <a href="#!" className="shorting_icon grid active">
                          <i className="ti-view-grid"></i>
                        </a>
                        <a href="#!" className="shorting_icon list">
                          <i className="ti-layout-list-thumb"></i>
                        </a>
                      </div>
                      <div className="custom_select">
                        <select className="form-control form-control-sm">
                          <option value="">Showing</option>
                          <option value="9">9</option>
                          <option value="12">12</option>
                          <option value="18">18</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row shop_container loadmore"
                data-item="8"
                data-item-show="4"
                data-finish-message="No More Item to Show"
                data-btn="Load More"
              >
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img1.jpg"
                          alt="product_img1"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Blue Dress For Woman
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#87554B"></span>
                          <span data-color="#333333"></span>
                          <span data-color="#DA323F"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img2.jpg"
                          alt="product_img2"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Lether Gray Tuxedo
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#847764"></span>
                          <span data-color="#0393B5"></span>
                          <span data-color="#DA323F"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <span className="pr_flash">New</span>
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img3.jpg"
                          alt="product_img3"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          woman full sliv dress
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#333333"></span>
                          <span data-color="#7C502F"></span>
                          <span data-color="#2F366C"></span>
                          <span data-color="#874A3D"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img4.jpg"
                          alt="product_img4"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">light blue Shirt</a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#333333"></span>
                          <span data-color="#A92534"></span>
                          <span data-color="#B9C2DF"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img5.jpg"
                          alt="product_img5"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          blue dress for woman
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#87554B"></span>
                          <span data-color="#333333"></span>
                          <span data-color="#5FB7D4"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <span className="pr_flash bg-danger">Hot</span>
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img6.jpg"
                          alt="product_img6"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Blue casual check shirt
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#87554B"></span>
                          <span data-color="#333333"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <span className="pr_flash bg-success">Sale</span>
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img7.jpg"
                          alt="product_img7"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          white black line dress
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#333333"></span>
                          <span data-color="#7C502F"></span>
                          <span data-color="#2F366C"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img8.jpg"
                          alt="product_img8"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Men blue jins Shirt
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#333333"></span>
                          <span data-color="#444653"></span>
                          <span data-color="#B9C2DF"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img9.jpg"
                          alt="product_img9"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          T-Shirt Form Girls
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#B5B6BB"></span>
                          <span data-color="#333333"></span>
                          <span data-color="#DA323F"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <span className="pr_flash bg-danger">Hot</span>
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img10.jpg"
                          alt="product_img10"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Red &amp; Black check shirt
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#E8ADA9"></span>
                          <span data-color="#C38F77"></span>
                          <span data-color="#BE7154"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img11.jpg"
                          alt="product_img11"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Black dress for woman
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#090909"></span>
                          <span data-color="#AC644D"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <span className="pr_flash bg-success">Sale</span>
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img12.jpg"
                          alt="product_img7"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Black T-shirt for woman
                        </a>
                      </h6>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#333333"></span>
                          <span data-color="#7C502F"></span>
                          <span data-color="#2F366C"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img13.jpg"
                          alt="product_img13"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Pink Dress For Woman
                        </a>
                      </h6>
                      <div className="product_price">
                        <span className="price">$65.00</span>
                        <del>$80.00</del>
                        <div className="on_sale">
                          <span>30% Off</span>
                        </div>
                      </div>
                      <div className="rating_wrap">
                        <div className="rating">
                          <div className="product_rate w-68"></div>
                        </div>
                        <span className="rating_num">(28)</span>
                      </div>
                      <div className="pr_desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#EEBAAC"></span>
                          <span data-color="#2F100F"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img14.jpg"
                          alt="product_img14"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          White shirt for man
                        </a>
                      </h6>
                      <div className="product_price">
                        <span className="price">$55.00</span>
                        <del>$60.00</del>
                      </div>
                      <div className="rating_wrap">
                        <div className="rating">
                          <div className="product_rate w-68"></div>
                        </div>
                        <span className="rating_num">(15)</span>
                      </div>
                      <div className="pr_desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#EAE9ED"></span>
                          <span data-color="#050505"></span>
                          <span data-color="#BE7154"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img15.jpg"
                          alt="product_img14"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          Pink Dress for Baby Kids
                        </a>
                      </h6>
                      <div className="product_price">
                        <span className="price">$55.00</span>
                        <del>$60.00</del>
                      </div>
                      <div className="rating_wrap">
                        <div className="rating">
                          <div className="product_rate w-68"></div>
                        </div>
                        <span className="rating_num">(15)</span>
                      </div>
                      <div className="pr_desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#DC8998"></span>
                          <span data-color="#F0E9EF"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 grid_item">
                  <div className="product">
                    <div className="product_img">
                      <a href="shop-product-detail.html">
                        <img
                          src="assets/images/product_img9.jpg"
                          alt="product_img12"
                        />
                      </a>
                      <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_info">
                      <h6 className="product_title">
                        <a href="shop-product-detail.html">
                          White T-shirt for woman
                        </a>
                      </h6>
                      <div className="product_price">
                        <span className="price">$69.00</span>
                        <del>$89.00</del>
                      </div>
                      <div className="rating_wrap">
                        <div className="rating">
                          <div className="product_rate w-68"></div>
                        </div>
                        <span className="rating_num">(22)</span>
                      </div>
                      <div className="pr_desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus blandit massa enim. Nullam id varius
                          nunc id varius nunc.
                        </p>
                      </div>
                      <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                          <span className="active" data-color="#1B1B25"></span>
                          <span data-color="#444653"></span>
                        </div>
                      </div>
                      <div className="list_product_action_box">
                        <ul className="list_none pr_action_btn">
                          <li className="add-to-cart">
                            <a href="#!">
                              <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                          </li>
                          <li>
                            <a href="shop-compare.html" className="popup-ajax">
                              <i className="icon-shuffle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-quick-view.html"
                              className="popup-ajax"
                            >
                              <i className="icon-magnifier-add"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="icon-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-fill-out">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
