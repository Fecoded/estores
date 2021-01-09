import {START_SPINNER, GET_PRODUCT, GET_PAGINATED_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, PRODUCT_ERROR} from './productTypes'

const INITIALSTATE = {
    products: [],
    paginated_products: [],
    totalPages: Number,
    currentPages: Number,
    loading: false,
    error: {},
}

const ProductReducer = (state = INITIALSTATE, action) => {
    const {type, payload, totalPage, currentPage } = action
    switch(type){
        case START_SPINNER:
            return {
              ...state,
              loading: true,
            };
        case GET_PRODUCT:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case GET_PAGINATED_PRODUCT:
            return {
                ...state,
                paginated_products: payload,
                totalPages: totalPage,
                currentPages: currentPage,
                loading: false,
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [payload, ...state.products],
                loading: false
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product._id !== payload),
                loading: false
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default: 
            return state
    }
}

export default ProductReducer