import React, {useEffect} from "react";
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {getPaginatedProducts, getProduct} from '../../redux/product/productActions'
import {addItemToCart} from '../../redux/cart/cartAction'

import {currencyFormat} from '../js/main'
import {SpinnerTwo} from '../spinner/spinner-component';
import SearchIcon from '../../assets/empty_cart.png'


const Shop = ({getPaginatedProducts, paginated_products, totalPages, currentPages, filtered, addItemToCart}) => {
  useEffect(() => {
    getPaginatedProducts();
  },[getPaginatedProducts])


  return (
    <div className="main_content">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
    
              <div className="row shop_container loadmore">
                {paginated_products.length > 0 ?
                  filtered !== null ?
                  filtered.length > 0 ? 
                    filtered.map((product) => (
                      <div key={product._id} className="col-lg-3 col-md-4 col-6 grid_item">
                      <div className="product">
                         <div className="product_img">
                            <img src={product.img} alt="img" />
                                  <div className="product_action_box">
                                  <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <Link to="#!" onClick={() => addItemToCart(product)}>
                                        <i className="ti-shopping-cart"></i> Add To Cart
                                    </Link>
                                    </li>
                                      
                                      <li>
                                      <Link to={`/${product._id}/${product.name.split(' ').join('-')}`}>
                                          <i className="ti-eye" onClick={() => getProduct(product._id)}></i>
                                      </Link>
                                   
                                      </li>
                                  </ul>
                                  </div>
                              </div>
                          <div className="product_info">
                              <h6 className="product_title"><a href="shop-product-detail.html">{product.name}</a></h6>
                              <div className="product_price">
                                  <span className="price">{currencyFormat(+product.price)}</span>
                                  <del>{product.previous_price !== "0" && currencyFormat(+product.previous_price)}</del>
                                  {/* <div className="on_sale">
                                      <span>35% Off</span>
                                  </div> */}
                              </div>
                          
                              <div className="pr_desc">
                                  <p>{product.description}</p>
                              </div>
                            
                          </div>
                      </div>
                  </div>
                    )) :
                    <div className="min-vh-50">
                      <div className="row justify-content-center align-items-center">
                          <img src={SearchIcon} alt='img' className="w-35" />
                      </div>
                       <p className="text-center pt-5">Your search does not match any products</p>           
                    </div>
                  :
                  paginated_products.map((product) => (
                    <div key={product._id} className="col-lg-3 col-md-4 col-6 grid_item">
                    <div className="product">
                       <div className="product_img">
                                    <img src={product.img} alt="img" />
                                <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li className="add-to-cart">
                                    <Link to="#!" onClick={() => addItemToCart(product)}>
                                        <i className="ti-shopping-cart"></i> Add To Cart
                                    </Link>
                                    </li>
                                    
                                    <li>
                                    <Link to={`/${product._id}/${product.name.split(' ').join('-')}`}>
                                        <i className="ti-eye" onClick={() => getProduct(product._id)}></i>
                                    </Link>
                                 
                                    </li>
                                </ul>
                                </div>
                            </div>
                        <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">{product.name}</a></h6>
                            <div className="product_price">
                                <span className="price">{currencyFormat(+product.price)}</span>
                                <del>{product.previous_price !== "0" && currencyFormat(+product.previous_price)}</del>
                                {/* <div className="on_sale">
                                    <span>35% Off</span>
                                </div> */}
                            </div>
                        
                            <div className="pr_desc">
                                <p>{product.description}</p>
                            </div>
                          
                        </div>
                    </div>
                </div>
                )): (
                  <SpinnerTwo />
                )}
              </div>
            </div>
          </div>
        </div>
        {totalPages > 0 && 
          <div className="d-flex justify-content-center align-items-center">
            {currentPages !== 1 && 
              <button type="submit" className="btn btn-fill-out" onClick={() => getPaginatedProducts(currentPages - 1)}>
                Previous
              </button>  
            }
            {currentPages !== totalPages && 
              <button type="submit" className="btn btn-fill-out" onClick={() => getPaginatedProducts(currentPages + 1)}>
                Next
              </button>
            
            }
          </div>
        
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  paginated_products: state.productReducer.paginated_products,
  totalPages: state.productReducer.totalPages,
  currentPages: state.productReducer.currentPages,
  filtered: state.productReducer.filtered
})

const mapDispatchToProps = dispatch => ({
  getPaginatedProducts: (count) => dispatch(getPaginatedProducts(count)),
  getProduct: (id) => dispatch(getProduct(id)),
  addItemToCart: (product) => dispatch(addItemToCart(product)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Shop);
