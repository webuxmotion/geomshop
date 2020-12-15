import CartActionTypes from './cart.types';
import { addItemToCart, clearItemFromCart, deleteItem } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItem(state.cartItems, action.payload)
      }

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      }

    default:
      return state;
  }
}

export default cartReducer;
