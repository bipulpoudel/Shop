import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CircularProgress from "@material-ui/core/CircularProgress";
//icon imports
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

//redux imports
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCartQty,
  increaseCartQty,
  removeItem,
} from "../../redux/actions/cartActions";
import useFetchProductQuantity from "../../hooks/useFetchProductQuantity";

const CartButton = ({ data: { id, name, price, image } }) => {
  //hook for fetching the quantity for redux store of product
  const [quantity, loading] = useFetchProductQuantity(id);

  const dispatch = useDispatch();

  const increaseCartQtyHandler = () => {
    dispatch(increaseCartQty(id));
  };

  const decreaseCartQtyHandler = () => {
    if (quantity === 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(decreaseCartQty(id));
    }
  };

  const addToCartHandler = () => {
    let product = {
      id,
      name,
      price,
      image,
      quantity: 1,
    };

    dispatch(addToCart(product));
  };

  return (
    <>
      {quantity > 0 ? (
        loading ? (
          <CircularProgress color="secondary" size={22} />
        ) : (
          <ButtonGroup
            size="small"
            color="secondary"
            variant="contained"
            aria-label="small outlined button group"
          >
            <Button startIcon={<AddIcon />} onClick={increaseCartQtyHandler} />
            <Button>{quantity}</Button>
            <Button
              startIcon={<RemoveIcon />}
              onClick={decreaseCartQtyHandler}
            />
          </ButtonGroup>
        )
      ) : (
        <Button
          size="small"
          color="secondary"
          variant="contained"
          startIcon={<ShoppingBasket />}
          onClick={addToCartHandler}
        >
          {loading ? (
            <CircularProgress color="inherit" size={22} />
          ) : (
            "Add to Cart"
          )}
        </Button>
      )}
    </>
  );
};

export default CartButton;
