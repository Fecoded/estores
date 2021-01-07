import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/header-logo.png";
import { Link } from "react-router-dom";

import { getCategory } from "../../redux/category/categoryActions";

const Header = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categoryReducer);
  const { user, isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <header className="header_wrap fixed-top header_with_topbar">
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <ul className="contact_detail text-center text-lg-left">
                  <li>
                    <i className="ti-mobile"></i>
                    <span>+(234) 813 486 6263</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-right">
                <ul className="header_list">
                  {/* <li><a href="compare.html"><i className="ti-control-shuffle"></i><span>Compare</span></a></li> */}
                  {/* <li><a href="wishlist.html"><i className="ti-heart"></i><span>Wishlist</span></a></li> */}
                  {isAuthenticated && user ? (
                    <li>
                      <Link to='/account'>
                        <i className="ti-user"></i>
                        <span>{user && user.displayName ? user && user.displayName : 'Admin'}</span>
                      </Link>

                      {/* <span
                        className="ml-3 cursor-pointer"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </span> */}
                    </li>
                  ) : (
                    <li>
                      <Link to="/login">
                        <i className="ti-user"></i>
                        <span>Login</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-header dark_skin">
        <div className="container">
          <div className="nav_block">
            <Link className="navbar-brand" to="/">
              <img className="logo_dark s-50" src={logo} alt="logo" />
            </Link>
            <div className="order-md-last">
              <div className="bottom_header dark_skin main_menu_uppercase">
                <div className="container">
                  <nav className="navbar navbar-expand-lg">
                    <div
                      className="collapse navbar-collapse justify-content-end"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav">
                        <li className="dropdown">
                          <Link className="nav-link" to="/">
                            Home
                          </Link>
                        </li>

                        {/* <li className="dropdown dropdown-mega-menu">
                            <a className="dropdown-toggle nav-link" href="#!" data-toggle="dropdown">Products</a>
                            <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-3">
                                        <ul> 
                                            <li className="dropdown-header">Woman's</li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Vestibulum sed</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Donec porttitor</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-right-sidebar.html">Donec vitae facilisis</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-list.html">Curabitur tempus</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-load-more.html">Vivamus in tortor</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-3">
                                        <ul>
                                            <li className="dropdown-header">Men's</li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Donec vitae ante ante</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Etiam ac rutrum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">Quisque condimentum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="compare.html">Curabitur laoreet</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="order-completed.html">Vivamus in tortor</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-3">
                                        <ul>
                                            <li className="dropdown-header">Kid's</li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec porttitor</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-3">
                                        <ul>
                                            <li className="dropdown-header">Accessories</li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec porttitor</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="d-lg-flex menu_banners">
                                    <div className="col-sm-4">
                                        <div className="header-banner">
                                            <img src="assets/images/menu_banner1.jpg" alt="menu_banner1"/>
                                            <div className="banne_info">
                                                <h6>10% Off</h6>
                                                <h4>New Arrival</h4>
                                                <a href="#!">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="header-banner">
                                            <img src="assets/images/menu_banner2.jpg" alt="menu_banner2"/>
                                            <div className="banne_info">
                                                <h6>15% Off</h6>
                                                <h4>Men's Fashion</h4>
                                                <a href="#!">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="header-banner">
                                            <img src="assets/images/menu_banner3.jpg" alt="menu_banner3"/>
                                            <div className="banne_info">
                                                <h6>23% Off</h6>
                                                <h4>Kids Fashion</h4>
                                                <a href="#!">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}

                        <li>
                          <Link className="nav-link nav_item" to="/contact">
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="navbar-nav attr-nav align-items-center">
                      <li className="dropdown cart_dropdown">
                        <a
                          className="nav-link cart_trigger"
                          href="#!"
                          data-toggle="dropdown"
                        >
                          <i className="linearicons-cart"></i>
                          <span className="cart_count">2</span>
                        </a>
                        <div className="cart_box dropdown-menu dropdown-menu-right">
                          <ul className="cart_list">
                            <li>
                              <a href="#!" className="item_remove">
                                <i className="ion-close"></i>
                              </a>
                              <a href="#!">
                                <img
                                  src="assets/images/cart_thamb1.jpg"
                                  alt="cart_thumb1"
                                />
                                Variable product 001
                              </a>
                              <span className="cart_quantity">
                                {" "}
                                1 x{" "}
                                <span className="cart_amount">
                                  {" "}
                                  <span className="price_symbole">$</span>
                                </span>
                                78.00
                              </span>
                            </li>
                            <li>
                              <a href="#!" className="item_remove">
                                <i className="ion-close"></i>
                              </a>
                              <a href="#!">
                                <img
                                  src="assets/images/cart_thamb2.jpg"
                                  alt="cart_thumb2"
                                />
                                Ornare sed consequat
                              </a>
                              <span className="cart_quantity">
                                {" "}
                                1 x{" "}
                                <span className="cart_amount">
                                  {" "}
                                  <span className="price_symbole">$</span>
                                </span>
                                81.00
                              </span>
                            </li>
                          </ul>
                          <div className="cart_footer">
                            <p className="cart_total">
                              <strong>Subtotal:</strong>{" "}
                              <span className="cart_price">
                                {" "}
                                <span className="price_symbole">$</span>
                              </span>
                              159.00
                            </p>
                            <p className="cart_buttons">
                              <a
                                href="#!"
                                className="btn btn-fill-line rounded-0 view-cart"
                              >
                                View Cart
                              </a>
                              <a
                                href="#!"
                                className="btn btn-fill-out rounded-0 checkout"
                              >
                                Checkout
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="product_search_form">
              <form>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="custom_select">
                      <select className="first_null">
                        <option value="">All Category</option>
                        {categories.length > 0
                          ? categories.map((category) => (
                              <option key={category._id} value={category._id}>
                                {category.description}
                              </option>
                            ))
                          : null}
                      </select>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Search Product..."
                    required=""
                    type="text"
                  />
                  <button type="submit" className="search_btn">
                    <i className="linearicons-magnifier"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
