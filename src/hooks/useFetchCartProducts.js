import { useSelector } from "react-redux";

const useFetchCartProducts = () => {
  const { cartItems: data = [] } = useSelector((state) => state.cart);

  return data;
};

export default useFetchCartProducts;
