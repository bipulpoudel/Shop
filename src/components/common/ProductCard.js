import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

//redux imports
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCartQty,
  increaseCartQty,
} from "../../redux/actions/cartActions";
import useFetchProductQuantity from "../../hooks/useFetchProductQuantity";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

export default function ProductCard({ data: { id, name, price, image } }) {
  const classes = useStyles();

  //hook for fetching the quantity for redux store of product
  const [quantity, loading] = useFetchProductQuantity(id);

  const dispatch = useDispatch();

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

  const increaseCartQtyHandler = () => {
    dispatch(increaseCartQty(id));
  };

  const decreaseCartQtyHandler = () => {
    dispatch(decreaseCartQty(id));
  };

  return (
    <Card elevation={4}>
      {loading && <LinearProgress color="secondary" />}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            variant="button"
            color="secondary"
            display="block"
            gutterBottom
          >
            Rs {price} /-
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {quantity > 0 ? (
          <>
            {loading ? (
              <CircularProgress color="secondary" size={22} />
            ) : (
              <ButtonGroup
                size="small"
                color="secondary"
                variant="contained"
                aria-label="small outlined button group"
              >
                <Button
                  startIcon={<AddIcon />}
                  onClick={increaseCartQtyHandler}
                />
                <Button>{quantity}</Button>
                <Button
                  startIcon={<RemoveIcon />}
                  onClick={decreaseCartQtyHandler}
                />
              </ButtonGroup>
            )}
          </>
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
      </CardActions>
    </Card>
  );
}
