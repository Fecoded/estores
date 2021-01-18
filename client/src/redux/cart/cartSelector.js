import { createSelector} from 'reselect'

const selectCart  = (state) => state.cartReducer;

export const selectCartItems = createSelector([selectCart], (cart) => cart.carts);

export const selectCartItemCount = createSelector([selectCartItems], (cartItems) => 
    cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.price, 0))

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => 
    cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.qty * +cartItem.price, 0)   
)