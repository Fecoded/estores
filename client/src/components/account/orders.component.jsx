import React, { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getOrders } from '../../redux/order/orderAction'
import { loadUsers} from '../../redux/user/userActions'

import OrderList from './orderList.component'

const Orders = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders());
        dispatch(loadUsers());
    },[dispatch])


    const {users} =  useSelector((state) => state.userReducer)
    const {orders} =  useSelector((state) => state.orderReducer)

    return (
        <Fragment>
              <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Address</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <OrderList key={order._id} users={users} order={order} />
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
         
        </Fragment>
    
    )
}



export default Orders