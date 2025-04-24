import React, { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
import CartProduct from "../Components/CartProduct";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const Viewcartpage = () => {
  const { cart } = useContext(AuthContext);
  const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
  };
  const totalPrice = (cart) => {
    return cart.reduce((total, product) => {
      return total + product.discountprice * product.quantity;
    }, 0);
  };
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row p-4 text-dark">
          <div className="col-4">
            <Typography variant="h4" gutterBottom>
              {" "}
              My Cart
            </Typography>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {cart.map((detail) => (
            <CartProduct product={detail} />
          ))}
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{ backgroundColor: "white", color: "black", p: 2 }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Total Items: {totalItem(cart)}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Total Price: ₹{totalPrice(cart)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ mt: 2 }}
                    disabled={cart.length === 0}
                  >
                    Buy
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    component={Link}
                    to="/"
                    sx={{
                      mt: 2,
                      ml: 2,
                      borderColor: "#333",
                      color: "#333",
                      "&:hover": {
                        backgroundColor: "#333",
                        color: "#fff",
                        borderColor: "#333",
                      },
                    }}
                  >
                    Back to home
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Viewcartpage;