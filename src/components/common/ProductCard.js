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

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

export default function ProductCard({ data: { name, price, image } }) {
  const classes = useStyles();

  return (
    <Card elevation={4}>
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
        <Button
          size="small"
          color="secondary"
          variant="contained"
          startIcon={<ShoppingBasket />}
        >
          Cart
        </Button>

        <ButtonGroup
          size="small"
          color="secondary"
          variant="contained"
          aria-label="small outlined button group"
        >
          <Button startIcon={<AddIcon />} />
          <Button>9</Button>
          <Button startIcon={<RemoveIcon />} />
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
