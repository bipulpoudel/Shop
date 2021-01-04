import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CartItem from "../components/cart/CartItem";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  placeOrderButton: {
    marginLeft: "auto",
  },
}));

const CartPage = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8} md={6}>
        <Card square elevation={1}>
          <CardHeader
            title="My Cart (4)"
            titleTypographyProps={{ variant: "button" }}
          />
          <Divider />
          <CardContent>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} lg={4} md={6}>
        <Card square elevation={1}>
          <CardHeader
            title="Price Details"
            titleTypographyProps={{ variant: "button" }}
          />
          <Divider />
          <CardContent>
            <List dense={true}>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <ListItemSecondaryAction>
                  <p>Test</p>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <ListItemSecondaryAction>
                  <p>Test</p>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <ListItemSecondaryAction>
                  <p>Test</p>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.placeOrderButton}
            >
              Place Order
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CartPage;
