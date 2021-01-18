import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import logo from "../../assets/header-logo.png";
import { Link } from "react-router-dom";

import { getCategory } from "../../redux/category/categoryActions";
import { filterProduct } from "../../redux/product/productActions";
import { selectCartTotal } from '../../redux/cart/cartSelector'
import { removeItemFromCart } from '../../redux/cart/cartAction'

import {currencyFormat} from '../js/main'

const Header = ({ total }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categoryReducer);
  const { user, isAuthenticated } = useSelector((state) => state.userReducer);
  const { carts} = useSelector((state) => state.cartReducer);

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
                        <li className="dropdown">
                          <Link className="nav-link" to="/shops">
                            Shops
                          </Link>
                        </li>

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
                          {carts.length !== 0 && 
                            <span className="cart_count">{carts.length}</span>
                          }
                        </a>
                        <div className="cart_box dropdown-menu dropdown-menu-right">
                          <ul className="cart_list">
                            {carts.length > 0 ? (
                              carts.map((cart) => (
                                <li key={cart._id}>
                                  {/* <a href="#!" className="item_remove">
                                    <i className="ion-close"></i>
                                  </a> */}
                                  <a href="#!" className="item_remove" onClick={() => dispatch(removeItemFromCart(cart._id))}><i className="ion-close"></i></a>
                                  <a href="#!">
                                    <img
                                      src={cart.img}
                                      alt="img"
                                    />
                                    {cart.name}
                                  </a>
                                  <span className="cart_quantity">
                                    {" "}
                                    {cart.qty} x {" "}
                                    <span className="cart_amount">
                                      {" "}
                                      <span className="price_symbole">{currencyFormat(+cart.price)}</span>
                                    </span>
                                  </span>
                                </li>

                              ))

                            ) : (
                              <li className="text-center">No item in your cart</li>
                            )}
                          </ul>
                          <div className="cart_footer">
                            <p className="cart_total">
                              <strong>Subtotal:</strong>{" "}
                              <span className="cart_price">
                                {" "}
                                <span className="price_symbole">{currencyFormat(+total)}</span>
                              </span>
                            </p>
                            <p className="cart_buttons">
                              <Link
                                to="/cart"
                                className="btn btn-fill-line rounded-0 view-cart"
                              >
                                View Cart
                              </Link>
                              <Link
                                to="/checkout"
                                className="btn btn-fill-out rounded-0 checkout"
                              >
                                Checkout
                              </Link>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="product_search_form radius_input">
              <form>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="custom_select">
                      <select className="first_null" onChange={(e) => dispatch(filterProduct(e.target.value))}>
                        <option value="">All Category</option>
                        {categories.length > 0
                          ? categories.map((category) => (
                              <option key={category._id} value={category.name}>
                                {category.description}
                              </option>
                            ))
                          : null}
                      </select>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Search EvStores..."
                    type="text"
                    onChange={(e) => dispatch(filterProduct(e.target.value))}
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

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal
})

export default connect(mapStateToProps)(Header);
