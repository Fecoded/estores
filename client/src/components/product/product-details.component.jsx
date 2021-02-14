import React, {useEffect} from "react";
import {withRouter} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {currencyFormat} from '../js/main'
import {WhatsappShareButton,FacebookShareButton, TwitterShareButton, FacebookIcon, WhatsappIcon, TwitterIcon} from 'react-share'
import Skeleton from 'react-loading-skeleton';
import {getProduct} from '../../redux/product/productActions'
import {addItemToCart} from '../../redux/cart/cartAction'

import Featured from '../featured/Featured.component'
import Exclusive from '../exclusive/Exclusive.component'

const ProductDetail = ({ match }) => {

  const dispatch = useDispatch()
  
  const {product} = useSelector((state) => state.productReducer)
  
  useEffect(() => {
    dispatch(getProduct(match.params.id));
  },[dispatch, match])

  return (
    <div className="main-content">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            {product && product.quantity === "0" && <span className="pr_flash bg-danger ml-3">Sold Out</span>}
              <div className="product-image">
              {product ? (
                <div className="product_img_box">
                    <img
                      src={product.img}
                      alt="img"
                    />
                </div>
                  ) : (
                    <Skeleton height={500} />
                  )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="pr_detail">
                  {product ? (
                <div className="product_description">
                  <div>
                    <h4 className="product_title">
                      {product.name}
                    </h4>
              
                    <div className="product_price">
                        <span className="price">{currencyFormat(+product.price)}</span>
                        <del>{product.previous_price !== '0' && currencyFormat(+product.previous_price)}</del>
                    </div>
                  </div>
                  
                  <div className="pr_desc">
                    <p>
                     {product &&  product.description}
                    </p>
                  </div>
                  <div className="product_sort_info">
                    <ul>
                      <li>
                        <i className="linearicons-shield-check"></i> Brand Warranty
                      </li>
                     
                      <li>
                        <i className="linearicons-bag-dollar"></i> Cash on
                        Delivery available
                      </li>
                    </ul>
                  </div>
             
                  <div className="pr_switch_wrap">
                    <span className="switch_lable">Size:</span>
                      <span>{product && product.size}</span>
                  </div>
                </div>
                ) : (
                      <Skeleton width={200} height={300} />
                    )}
                <hr />
                {/* <div className="cart_extra">
                  <div className="cart-product-quantity">
                    <div className="quantity">
                       <button className="minus">-</button>
                      <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        title="Qty"
                        className="qty"
                        onChange={(e) => e.target.value}
                      />
                      <button className="plus">+</button>
                    </div>
                  </div>
                </div> */}
                  <div className="cart_btn mt-4">
                    {product && product.quantity === "0" ? (
                      <button
                        className="btn btn-fill-out btn-addtocart"
                        type="button" onClick={() => dispatch(addItemToCart(product))}
                        disabled
                      >
                        <i className="icon-basket-loaded"></i> Add to cart
                      </button>

                    ) : (
                      <button
                      className="btn btn-fill-out btn-addtocart"
                      type="button" onClick={() => dispatch(addItemToCart(product))}
                    >
                      <i className="icon-basket-loaded"></i> Add to cart
                    </button>
                    )}
              
                  </div>
                <hr />
                <ul className="product-meta">

                  <li>
                    Category: <a href="#!">{product &&  product.category}</a>
                  </li>
              
                </ul>

                <div className="product_share">
                  <span>Share:</span>
                  <ul className="social_icons">
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
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="large_divider clearfix"></div>
            </div>
          </div>


          <div className="row">
            <div className="col-12">
              <div className="tab-style3">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="Description-tab"
                      data-toggle="tab"
                      href="#Description"
                      role="tab"
                      aria-controls="Description"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="Additional-info-tab" data-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Additional info</a>
                  </li>
               
                </ul>
                <div className="tab-content shop_info_tab">
                  <div
                    className="tab-pane fade show active"
                    id="Description"
                    role="tabpanel"
                    aria-labelledby="Description-tab"
                  >
                    <p>
                     {product && product.description}
                    </p>
              
                  </div>
                    <div className="tab-pane fade" id="Additional-info" role="tabpanel" aria-labelledby="Additional-info-tab">
                      <div className="product_sort_info">
                        <ul>
                          <li>
                            <i className="linearicons-shield-check"></i> Brand Warranty
                          </li>
                        
                          <li>
                            <i className="linearicons-bag-dollar"></i> Cash on
                            Delivery available
                          </li>
                        </ul>
                    </div>
                  </div>
                  
                </div>


              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="small_divider"></div>
              <div className="divider"></div>
              <div className="medium_divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="heading_s1">
                <h3>Related Products</h3>
              </div>
              {product && product.type === "Featured" ? (
                <Featured heading={'none'} container={'none'} section={'none'} />   
              ) : (
                <Exclusive heading={'none'} container={'none'} section={'none'} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductDetail);
