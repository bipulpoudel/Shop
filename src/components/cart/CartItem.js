import React from "react";

import Grid from "@material-ui/core/Grid";

const CartItem = () => {
  return (
    <Grid container spacing={1}>
      <Grid item md={3}>
        <img src="https://source.unsplash.com/random" style={{ height: 100 }} />
      </Grid>
      <Grid item md={9}>
        Product Name Details all will be here
      </Grid>
    </Grid>
  );
};

export default CartItem;
