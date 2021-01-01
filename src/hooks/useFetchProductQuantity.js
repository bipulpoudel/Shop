import { useSelector } from "react-redux";

const useFetchProductQuantity = (productId) => {
  const { cartItems, loading } = useSelector((state) => state.cart);

  const quantity = cartItems?.find((item) => item.id === productId)
    ? cartItems.find((item) => item.id === productId).quantity
    : 0;

  return [quantity, loading];
};

export default useFetchProductQuantity;
