import React from 'react'
import {currencyFormat} from '../js/main'
import  {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getProduct} from '../../redux/product/productActions'
import {addItemToCart} from '../../redux/cart/cartAction'


const ExclusiveList = ({ product }) => {

    const dispatch = useDispatch();

    return (
        
        <div className="col-lg-3 col-md-4 col-6 grid_item">
            <div className="product">
               <div className="product_img">
                            <img src={product.img} alt="img" className="img_product"  />
                        <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                            <Link to="#!" onClick={() => dispatch(addItemToCart(product))}>
                                <i className="ti-shopping-cart"></i> Add To Cart
                            </Link>
                            </li>
                
                            <li>
                            <Link to={`/${product._id}/${product.name.split(' ').join('-')}`}>
                                <i className="ti-eye" onClick={() => dispatch(getProduct(product._id))}></i>
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
    )
}

export default ExclusiveList