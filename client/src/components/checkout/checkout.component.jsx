import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {useSelector, connect, useDispatch} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartTotal} from '../../redux/cart/cartSelector'
import {updateProfile} from '../../redux/user/userActions'
import {createOrder} from '../../redux/order/orderAction'

import {currencyFormat} from '../js/main'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CheckOut = ({ total }) => {
    const [setFirstName] = useState('')
    const [setLastName] = useState('')
    const [setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [shipping_address, setShippingAddress] = useState('')

    const [payment_type, setPaymentType] = useState('Direct Transfer')

    const {carts} =  useSelector((state) => state.cartReducer)
    const {user, isAuthenticated} =  useSelector((state) => state.userReducer)

    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile({
             firstName: user.firstName, 
             lastName: user.lastName,
             displayName: user.displayName, 
             email: user.email, 
             phone, 
             shipping_address 
        }))
    }

    useEffect(() => {
        if(user){
            setPhone(user.phone)
            setShippingAddress(user.shipping_address)
        }
    },[user]);

    const onOrder = () => {
        if(user && isAuthenticated) {
            if(user.shipping_address !== ""){
                let arr = carts;
    
                function addDetails(v) {
                  return { ...v, payment_type, address: shipping_address };
                }
                let newCart = arr.map(addDetails);
             
                dispatch(createOrder(newCart, history))
            } else {
                toast.error(`❤️ Please complete your profile, to continue order`)
            }
        } else {
            toast.error(`❤️ Please login, to place order`)
        }
    }

    return (
        <div className="main_content">
            <div className="section">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12">
                        <div className="medium_divider"></div>
                        <div className="divider center_icon"><i className="linearicons-credit-card"></i></div>
                        <div className="medium_divider"></div>
                    </div>
                
          
                <div className="col-md-6">
                    <div className="heading_s1">
                        <h4>Shipping Details</h4>
                    </div>
                    {user !== null ? (
                        <form onSubmit={onSubmit}>
                            <label>First Name</label>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    readOnly 
                                    className="form-control" 
                                    name="fname" 
                                    placeholder="First name *"
                                    value={user.firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                            <label>Last Name</label>
                                <input 
                                    type="text" 
                                    readOnly 
                                    className="form-control" 
                                    name="lname" 
                                    placeholder="Last name *"
                                    value={user.lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                            <label>Email Address</label>
                                <input 
                                    className="form-control" 
                                    readOnly 
                                    type="email" 
                                    name="cname" 
                                    placeholder="Company Name"
                                    value={user.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>
                            
                            <div className="form-group">
                            <label>Phone Number</label>
                                <input 
                                    className="form-control" 
                                    type="number" 
                                    name="phone" 
                                    placeholder="Phone *"
                                    value={phone || ''}
                                    onChange={(e) => setPhone(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                            <label>Shipping Address</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="billing_address" 
                                    placeholder="Address *"
                                    value={shipping_address || ''}
                                    onChange={(e) => setShippingAddress(e.target.value)}
                                    />
                            </div>
                            <button className="btn btn-fill-out btn-block">Submit</button>
                        </form>

                    ) : (
                        <p>To Continue Shopping, <Link to="/login">Please Login</Link></p>
                    )} 
                </div>
                <div className="col-md-6">
                    <div className="order_review">
                        <div className="heading_s1">
                            <h4>Your Orders</h4>
                        </div>
                        <div className="table-responsive order_table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((cart) => (
                                        <tr key={cart._id}>
                                            <td>{cart.name}</td>
                                            <td>{cart.price}<span className="product-qty"> x {cart.qty}</span></td>
                                            <td>{currencyFormat(+cart.price * +cart.qty)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Delivery</th>
                                        <td>Free Delivery</td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td className="product-subtotal">{currencyFormat(total)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="payment_method">
                            <div className="heading_s1">
                                <h4>Payment</h4>
                            </div>
                            <div className="payment_option">
                                <div className="custome-radio">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="payment_option" 
                                        id="exampleRadios3" 
                                        value={payment_type} 
                                        onChange={() => setPaymentType("Direct Transfer")} 
                                        defaultChecked
                                        />
                                    <label className="form-check-label" htmlFor="exampleRadios3">Direct Bank Or BTC Transfer</label>
                                       <p data-method="option3" className="payment-text">Account Name: ENOBHAYISOBO EROMOSELE <br/> Account No: 2066183101 <br/> Bank: UBA <br /> <br />  BTC WALLET: 3JTQqrai282LmFCWw1EQyeCtZms9m3rQaz </p>
                                    
                                </div>
                                <div className="custome-radio">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="payment_option" 
                                        id="exampleRadios4" 
                                        value={payment_type} 
                                        onChange={() => setPaymentType("Payment on Delivery")}
                                        />
                                    <label className="form-check-label" htmlFor="exampleRadios4">Payment on Delivery</label>
                                    {/* <p data-method="option4" >Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p> */}
                                </div>
                
                            </div>
                        </div>
                        <button className="btn btn-fill-out btn-block" onClick={onOrder}>Place Order</button>
                    </div>
                </div>
           
        </div>
    </div>
</div>
</div>
    )
}

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOut)