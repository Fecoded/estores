import {
    START_SPINNER, 
    GET_PRODUCT, 
    GET_PRODUCTS, 
    GET_PAGINATED_PRODUCT, 
    FILTER_PRODUCT,
    UPDATE_QUANTITY,
    CREATE_PRODUCT, 
    DELETE_PRODUCT, 
    PRODUCT_ERROR
} from './productTypes'

const INITIALSTATE = {
    products: [],
    paginated_products: [],
    product: null,
    totalPages: Number,
    currentPages: Number,
    loading: false,
    filtered: null,
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
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: payload,
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
        case UPDATE_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => product._id === payload._id ? payload : product),
                loading: false
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                filtered: state.paginated_products.filter((product) => {
                const regex = new RegExp(`${payload}`, 'gi');
                return (
                    product.name.match(regex) ||
                    product.category.match(regex) ||
                    product.price.match(regex)
                );
                }),
                loading: false,
            };
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