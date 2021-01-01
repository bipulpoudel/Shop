import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";

export default combineReducers({
  cart: cartReducer,
});
