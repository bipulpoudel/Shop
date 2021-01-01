import { useSelector } from "react-redux";

const useFetchCartQuantity = () => {
  const { cartItems = [], loading } = useSelector((state) => state.cart);

  const quantity = cartItems?.length;

  return [quantity, loading];
};

export default useFetchCartQuantity;
