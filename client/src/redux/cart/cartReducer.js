import {ADD_PRODUCT, ADD_TO_CART, REMOVE_SINGLE_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from './cartTypes'
import {addProductToCart, addQuantityToProduct, removeQuantityToProduct} from './cartUtils'

const INITIALSTATE = {
    carts: [],
    loading: false,
}

const cartReducer = (state = INITIALSTATE, action) => {
    const {type, payload} = action
    switch(type){
        case ADD_TO_CART:
            return {
                ...state,
                carts: addProductToCart(state.carts, payload),
                loading: false
            }
        case ADD_PRODUCT:
            return {
                ...state,
                carts: addQuantityToProduct(state.carts, payload),
                loading: false
            }
        case REMOVE_PRODUCT: 
            return {
                ...state,
                carts: removeQuantityToProduct(state.carts, payload),
                loading: false
            }
        case REMOVE_SINGLE_PRODUCT: 
            return {
                ...state,
                carts: state.carts.filter((cart) => cart._id !== payload),
                loading: false
            }
        case CLEAR_CART:
            return {
                ...state,
                carts: [],
                loading: false
            }
        default: 
            return state
    }
}

export default cartReducer