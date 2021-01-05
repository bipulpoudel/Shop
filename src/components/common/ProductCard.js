import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CartButton from "./CartButton";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

export default function ProductCard({ data }) {
  const classes = useStyles();

  const { name, price, image } = data;

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
        <CartButton data={data} />
      </CardActions>
    </Card>
  );
}
