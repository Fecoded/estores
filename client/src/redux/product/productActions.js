import {
    START_SPINNER, 
    GET_PRODUCT, 
    GET_PRODUCTS, 
    GET_PAGINATED_PRODUCT, 
    FILTER_PRODUCT,
    CREATE_PRODUCT, 
    DELETE_PRODUCT, 
    PRODUCT_ERROR
} from './productTypes'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/product/all')

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.data
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data.errors,
          });
    }
} 

export const getProduct = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type: GET_PRODUCT,
            payload: res.data.data
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data.errors,
          });
    }
} 

export const getPaginatedProducts = (count) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/product?perPage=12&page=${count || 1}`);

        dispatch({
          type: GET_PAGINATED_PRODUCT,
          payload: res.data.data,
          totalPage: res.data.totalPages,
          currentPage: res.data.currentPage,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data.errors,
          });
    }
}

export const createProduct = ({
    image,
    name,
    price,
    previous_price,
    description,
    category,
    size,
    type,
    quantity,
    inputRef,
    setFile,
    setName,
    setPreviousPrice,
    setPrice,
    setCategory,
    setDescription,
    setSize,
    setQuantity,
    setType
}) => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
    try {
        dispatch({ type: START_SPINNER })

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('previous_price', previous_price);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('size', size);
        formData.append('type', type);
        formData.append('quantity', quantity);

        const res = await axios.post('/api/v1/product', formData, config);

        dispatch({
          type: CREATE_PRODUCT,
          payload: res.data.data,
        });

        toast.success(`❤️ ${res.data.message}`)

        inputRef.current.value = "";
        setFile(null);
        setName('');
        setPreviousPrice('');
        setPrice('');
        setCategory('');
        setDescription('');
        setSize('');
        setQuantity('');
        setType('');
   
    } catch (err) {
        const errors = err.response.data.msg;

        if (errors === 'File too large') {
          toast.error(errors);
        } else {
          toast.error(errors);
        }
    
        dispatch({
          type: PRODUCT_ERROR,
          payload: err.response.data.msg,
        });
    }
}

export const deleteProduct = (id) => async dispatch => {
    try {
        await axios.delete(`/api/v1/product/${id}`)

        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data.errors,
          });
    }
}

// FILTER PRODUCT
export const filterProduct = (text) => (dispatch) => {
    dispatch({ type: FILTER_PRODUCT, payload: text });
  };