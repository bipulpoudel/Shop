import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CartItem from "../components/cart/CartItem";

const CartPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8} md={6}>
        <Card square elevation={1}>
          <CardHeader
            title="My Cart (4)"
            titleTypographyProps={{ variant: "button" }}
          />
          <Divider />
          <CartItem />
        </Card>
      </Grid>

      <Grid item xs={12} lg={4} md={6}>
        <Card square elevation={1}>
          <CardHeader
            title="Price Details"
            titleTypographyProps={{ variant: "button" }}
          />
          <Divider />
          Hello
        </Card>
      </Grid>
    </Grid>
  );
};

export default CartPage;
