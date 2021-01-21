import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {currencyFormat} from '../js/main'
import moment from 'moment'
import { deleteOrder, updateOrder } from '../../redux/order/orderAction'
import swal from 'sweetalert';


const OrderList = ({ users, order, deleteOrder, updateOrder }) => {

    const onDelete = (value) => {
        swal({
        text: `Are you sure you want to delete ${value.name}?`,
        icon: 'info',
        buttons: true,
        dangerMode: true,
        }).then((result) => {
        if (result) {deleteOrder(value._id)}
      })}

    const onUpdate = (value) => {
        swal({
        text: `Are you sure you want to confirm ${value.name}?`,
        icon: 'info',
        buttons: true,
        dangerMode: true,
        }).then((result) => {
        if (result) {updateOrder(value._id)}
      })}


    return (
        <Fragment>
            {users.map((user) => user._id === order.user && (
                <tr key={user._id}>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{order.name}</td>
                    <td>{currencyFormat(+order.price)}</td>
                    <td>{order.size}</td>
                    <td>{order.color}</td>
                    <td>{order.qty}</td>
                    <td>{currencyFormat(+order.price * +order.qty)}</td>
                    <td>{order.address}</td>
                    <td>{order.payment_type}</td>
                    <td>{order.status}</td>
                    <td>{moment(order.createdAt).format("DD/MM/YYYY")}</td>
                    {order.status === "Processing" ? (
                        <td><i className="ti-close cursor-pointer" onClick={() => onUpdate(order)}></i></td>
                        ) : (
                        <td><i className="ti-check"></i></td>

                    )}
                    <td><i className="ti-trash cursor-pointer" onClick={() => onDelete(order)}></i></td>
                </tr>
            ))}
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteOrder: (id) => dispatch(deleteOrder(id)),
    updateOrder: (id) => dispatch(updateOrder(id))
})

export default connect(null, mapDispatchToProps)(OrderList)
