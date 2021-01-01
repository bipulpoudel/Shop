import {
  CART_REQUEST,
  ADD_TO_CART,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
} from "../types";

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: CART_REQUEST });

  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const increaseCartQty = (productId) => (dispatch) => {
  dispatch({ type: CART_REQUEST });

  dispatch({
    type: INCREASE_CART_QTY,
    payload: productId,
  });
};

export const decreaseCartQty = (productId) => (dispatch) => {
  dispatch({ type: CART_REQUEST });

  dispatch({
    type: DECREASE_CART_QTY,
    payload: productId,
  });
};
