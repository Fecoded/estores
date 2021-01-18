import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect, useDispatch} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cartSelector'
import {addItem, removeItem, removeItemFromCart} from '../../redux/cart/cartAction'
import {currencyFormat} from '../js/main'

const Cart = ({ carts, total }) => {
    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch()

    return (
        <div className="main_content">

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive shop_cart_table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts.map((cart) => (
                                            <tr key={cart._id}>
                                                <td className="product-thumbnail"><img src={cart.img} alt="img"/></td>
                                                <td className="product-name" data-title="Product">{cart.name}</td>
                                                <td className="product-price" data-title="Price">{currencyFormat(+cart.price)}</td>
                                                <td className="product-quantity" data-title="Quantity"><div className="quantity">
                                                <button className="minus" onClick={() => dispatch(removeItem(cart))}>-</button>
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    value={cart.qty}
                                                    title="Qty"
                                                    className="qty"
                                                    onChange={() => setQuantity(cart.qty)}
                                                />
                                                <button className="plus" onClick={() => dispatch(addItem(cart))}>+</button>
                                            </div>
                                            </td>
                                                <td className="product-subtotal" data-title="Total">{currencyFormat(+cart.price * +cart.qty)}</td>
                                                <td className="product-remove cursor-pointer" data-title="Remove" onClick={() => dispatch(removeItemFromCart(cart._id))}><i className="ti-close"></i></td>
                                            </tr>

                                        ))}
                                    </tbody>
                                
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="medium_divider"></div>
                            <div className="divider center_icon"><i className="ti-shopping-cart-full"></i></div>
                            <div className="medium_divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="border p-3 p-md-4">
                                <div className="heading_s1 mb-3">
                                    <h6>Cart Totals</h6>
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className="cart_total_label">Subtotal</td>
                                                <td className="cart_total_amount">{currencyFormat(total)}</td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">Shipping</td>
                                                <td className="cart_total_amount">Free Shipping</td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">Total</td>
                                                <td className="cart_total_amount"><strong>{currencyFormat(total)}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Link to="/checkout" className="btn btn-fill-out">Proceed To CheckOut</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    carts: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Cart)