import {GET_ORDER, GET_ORDERS, CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER, ORDER_ERROR} from './orderTypes'


const InitialState = {
    order: [],
    orders: [],
    loading: false,
    error: {}
}

const OrderReducer = (state = InitialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case GET_ORDER:
            return {
                ...state,
                order: payload,
                loading: false 
            }
        case GET_ORDERS:
            return {
                ...state,
                orders: payload,
                loading: false
            }
        case CREATE_ORDER:
            return {
                ...state,
                order: [...state.order, payload],
                loading: false
            }
        case UPDATE_ORDER:
            return {
                ...state,
                orders: state.orders.map((order) =>
                order._id === payload._id ? payload : order
              ),
              loading: false
            }
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter((order) => order._id !== payload),
                loading: false
            }
        case ORDER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
          return state;
    }
}

export default OrderReducer