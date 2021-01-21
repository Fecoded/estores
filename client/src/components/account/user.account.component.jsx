import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'

import {logout, updateProfile} from '../../redux/user/userActions'
import {getOrder} from '../../redux/order/orderAction'
import {SpinnerThree} from '../spinner/spinner-component'
import {currencyFormat} from '../js/main'


const UserAccount = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [shipping_address, setShippingAddress] = useState('')

    const dispatch = useDispatch()

    const {user, loading} =  useSelector((state) => state.userReducer)
  
    const {order} =  useSelector((state) => state.orderReducer)

    useEffect(() => {
        if(user) {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setDisplayName(user.displayName)
            setEmail(user.email)
            setPhone(user.phone)
            setShippingAddress(user.shipping_address)
        }
        dispatch(getOrder());
       
    },[user, dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile({firstName, lastName, displayName, email, phone, shipping_address }))
    }

    return (
        <Fragment>
                <div className="main-content">
                    <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="dashboard_menu">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="dashboard-tab" data-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="false"><i className="ti-layout-grid2"></i>Dashboard</a>
                                    </li>
                                 
                                  
                                        <Fragment>
                                           <li className="nav-item">
                                                 <a className="nav-link" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false"><i className="ti-shopping-cart-full"></i>Orders</a>
                                           </li>
                                
                                           <li className="nav-item">
                                                <a className="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="true"><i className="ti-location-pin"></i>My Address</a>
                                           </li>

                                            <li className="nav-item">
                                                <a className="nav-link" id="account-detail-tab" data-toggle="tab" href="#account-detail" role="tab" aria-controls="account-detail" aria-selected="true"><i className="ti-id-badge"></i>Account Details</a>
                                            </li>

                                        </Fragment>

                                
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#!" onClick={() => dispatch(logout())}><i className="ti-lock"></i>Logout</Link>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="tab-content dashboard_content">
                            <div className="tab-pane fade active show" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Dashboard</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>From your account dashboard. you can easily check &amp; view your <a href="#!" >recent orders</a>, manage your <a href="#!">shipping and billing addresses</a> and <a href='#!' >edit your password and account details.</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* Orders */}
                            <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Orders</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Size</th>
                                                        <th>Color</th>
                                                        <th>Total</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {order.map((ord) => (
                                                        <tr key={ord._id}>
                                                            <td>{ord.name}</td>
                                                            <td>{currencyFormat(+ord.price)}</td>
                                                            <td>{ord.qty}</td>
                                                            <td>{ord.size}</td>
                                                            <td>{ord.color}</td>
                                                            <td>{currencyFormat(+ord.price * +ord.qty)}</td>
                                                            <td>{moment(ord.createdAt).format("DD-MM-YYYY")}</td>
                                                            <td>{ord.status}</td>
                                                        </tr>
                                                    ))}
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <div className="card mb-lg-0">
                                            <div className="d-flex card-header justify-content-between">
                                                <h3>Shipping Address</h3>
                                                    {/* <button type="submit" className="btn btn-fill-out" name="submit">Edit</button> */}
                                            </div>
                                            <div className="card-body">
                                                <address>{user && user.shipping_address ? user.shipping_address : "No Shipping Address Avaliable"}</address>
                                                {/* <p>New York</p> */}
                                            </div>
                                           
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            {/* Account Details */}
                            <div className="tab-pane fade" id="account-detail" role="tabpanel" aria-labelledby="account-detail-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Account Details</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>Complete Your Profile</p>
                                        <form onSubmit={onSubmit}>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label>First Name <span className="required">*</span></label>
                                                    <input 
                                                        required
                                                        readOnly
                                                        className="form-control" 
                                                        name="firstName" 
                                                        type="text"
                                                        value={firstName || ''}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Last Name <span className="required">*</span></label>
                                                    <input 
                                                         required
                                                         readOnly
                                                         className="form-control" 
                                                         name="lastName" 
                                                         type="text"
                                                         value={lastName || ''}
                                                         onChange={(e) => setLastName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Username <span className="required">*</span></label>
                                                    <input 
                                                         required
                                                         readOnly
                                                         className="form-control" 
                                                         name="displayName" 
                                                         type="text"
                                                         value={displayName || ''}
                                                         onChange={(e) => setDisplayName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Email Address <span className="required">*</span></label>
                                                    <input
                                                         required
                                                         readOnly
                                                         className="form-control" 
                                                         name="email" 
                                                         type="text"
                                                         value={email || ''}
                                                         onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Phone Number <span className="required">*</span></label>
                                                    <input
                                                         required
                                                         className="form-control" 
                                                         name="phone" 
                                                         type="text"
                                                         value={phone || ''}
                                                         onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </div>
                                              
                                                <div className="form-group col-md-12">
                                                    <label>Shipping Address <span className="required">*</span></label>
                                                    <input
                                                         required
                                                         className="form-control" 
                                                         name="shipping_address" 
                                                         type="text"
                                                         value={shipping_address || ''}
                                                         onChange={(e) => setShippingAddress(e.target.value)}
                                                    />
                                                </div>
                                                {loading ? (
                                                    <SpinnerThree />
                                                ) : (
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Save</button>
                                                    </div>

                                                )}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </Fragment>
    )
}

export default UserAccount