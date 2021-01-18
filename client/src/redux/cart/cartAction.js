import {ADD_PRODUCT, ADD_TO_CART, REMOVE_SINGLE_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from './cartTypes'


export const addItemToCart = (product) => dispatch => {
    dispatch({ type: ADD_TO_CART, payload: product})
 }

export const addItem = (product) => dispatch => {
    dispatch({ type: ADD_PRODUCT, payload: product})
 }

export const removeItem = (product) => dispatch => {
    dispatch({ type: REMOVE_PRODUCT, payload: product})
  }
export const removeItemFromCart = (id) => dispatch => {
    dispatch({ type: REMOVE_SINGLE_PRODUCT, payload: id})
  }

export const clearCart = () => dispatch => {
  dispatch({ type: CLEAR_CART })
}