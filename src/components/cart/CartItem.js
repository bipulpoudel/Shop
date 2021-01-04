import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

//icon imports
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  image: { height: 100, marginBottom: 5, width: 100 },
}));

const CartItem = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1} className={classes.root}>
        <Grid item md={3}>
          <img
            src="https://source.unsplash.com/random"
            className={classes.image}
            alt="Product"
          />
          <ButtonGroup
            size="small"
            color="secondary"
            variant="contained"
            aria-label="small outlined button group"
          >
            <Button startIcon={<AddIcon />} />
            <Button>2</Button>
            <Button startIcon={<RemoveIcon />} />
          </ButtonGroup>
        </Grid>
        <Grid item md={9}>
          <Typography variant="h6" gutterBottom>
            Product 1
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Category
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            Shop Name
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Rs 199 /-
          </Typography>

          <Button color="secondary">REMOVE</Button>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default CartItem;
