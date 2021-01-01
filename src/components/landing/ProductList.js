import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ProductCard from "../common/ProductCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { products } from "../../data";

export default function ProductList() {
  return (
    <Card elevation={1}>
      <CardHeader
        action={
          <Button color="secondary" variant="contained">
            View All
          </Button>
        }
        title="Deals Of The Day"
        subheader="Deals Refresh Every 8 Hours"
      />
      <CardContent>
        <Grid container spacing={3}>
          {products.map((product, idx) => (
            <Grid key={idx} item xs={12} lg={3} md={6}>
              <ProductCard data={product} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
