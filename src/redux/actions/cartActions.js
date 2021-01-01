import {
  CART_REQUEST,
  ADD_TO_CART,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
  REMOVE_CART_ITEM,
} from "../types";

import { toast } from "react-toastify";

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: CART_REQUEST });

  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });

  toast.success(`${product?.name} added to cart!`);
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

export const removeItem = (productId) => (dispatch) => {
  dispatch({ type: CART_REQUEST });

  dispatch({
    type: REMOVE_CART_ITEM,
    payload: productId,
  });
};
