import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from'./styles'

// const products = [
//   { id: 1, name: "Shoes", description: "Running Shoes", price: "5€" , image:'https://img01.ztat.net/article/spp-media-p1/3e67cc42c6c1426f921700706f884995/2064d93dbf0842629a156d0348ec26d7.jpg?imwidth=1800&filter=packshot'},
//   { id: 2, name: "Macbook", description: "Apple macbook", price: "10€", image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/macbook-air-nuevo-m1-procesador-silicon-apple-1605035406.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*' },
// ];
const Products = ({products, onAddToCart}) => {
  const classes= useStyles()
  return (

    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
