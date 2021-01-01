import {
  CART_REQUEST,
  ADD_TO_CART,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
  REMOVE_CART_ITEM,
} from "../types";

export const cartReducer = (
  state = { cartItems: [], loading: false },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        loading: false,
      };

    case INCREASE_CART_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
        loading: false,
      };

    case DECREASE_CART_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
        loading: false,
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
        loading: false,
      };

    default:
      return state;
  }
};
