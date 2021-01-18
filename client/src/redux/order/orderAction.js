import {GET_ORDER, GET_ORDERS, CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER, ORDER_ERROR} from './orderTypes'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {clearCart} from '../cart/cartAction'

export const getOrder = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/order')

        dispatch({
            type: GET_ORDER,
            payload: res.data.data
        })
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
        })        
    }
}

export const getOrders = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/order/all')

        dispatch({
            type: GET_ORDERS,
            payload: res.data.data
        })
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
        })        
    }
}

export const createOrder = (formData, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/v1/order', formData, config)

        dispatch({
            type: CREATE_ORDER,
            payload: res.data.data
        })
    
        history.push("/complete")
        dispatch(clearCart())
        
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
            payload: err.response.data.msg
        })
        toast.error(`❤️ ${err.response.data.msg}`)
    }
}

export const updateOrder = (id) => async dispatch => {
    try {
        const res = await axios.put(`/api/v1/order/${id}`)

        dispatch({
            type: UPDATE_ORDER,
            payload: res.data.data
        })

        toast.success(`❤️ Status Updated Successfully`)
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
        })        
    }
}

export const deleteOrder = (id) => async dispatch => {
    try {
        const res = await axios.delete(`/api/v1/order/${id}`)

        dispatch({
            type: DELETE_ORDER,
            payload: id
        })

        toast.success(`❤️ ${res.data.message}`)
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
            payload: err.response.data.error
        })        
    }
}


