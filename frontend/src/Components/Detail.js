import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Detail = ({ detail }) => {
  const { addtocart, removeCart } = useContext(AuthContext);
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    if (inCart) {
      removeCart(detail._id);
    } else {
      addtocart(detail);
    }
    setInCart(!inCart); // Toggle cart state
  };
  return (
    <div className="container py-5">
      <div className="row g-4 align-items-stretch">
        <div className="col-12 col-md-5">
          <div
            id="productCarousel"
            className="carousel slide rounded shadow"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {(detail?.images || []).map((img, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img
                    src={img}
                    className="d-block w-100 object-fit-cover"
                    alt={`Slide ${index + 1}`}
                    style={{
                      aspectRatio: "3/4",
                      objectFit: "cover",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            {detail?.images?.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="col-12 col-md-7 d-flex">
          <Card
            sx={{
              p: 3,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.6rem" }, // Adjusting font size for different breakpoints
                }}
              >
                {detail?.name || "Loading..."}
              </Typography>
              <Typography variant="h6">
                Brand: {detail?.brand || "N/A"}
              </Typography>
              <Typography variant="h6">
                Category: {detail?.category || "N/A"}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Price:{" "}
                <span
                  style={{ textDecoration: "line-through", marginRight: "8px" }}
                >
                  ₹{detail?.price}/{" "}
                </span>
                Buy at <u>₹{detail?.discountprice}</u>
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.6rem" }, // Adjusting font size for different breakpoints
                  }}
                >
                  About the Product:
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1.3rem" }, // Adjusting font size for different breakpoints
                  }}
                >
                  {detail?.description || "No description available."}
                </Typography>
              </Box>
            </CardContent>

            <Box sx={{ display: "flex", gap: 2, px: 2, pb: 2 }}>
              <Button variant="contained" color="error" sx={{}}>
                Buy Now
              </Button>
              {/* <Button variant="contained" size="large" color="primary" onClick={()=>addtocart(detail)}  >Add to Cart</Button> */}
              <Button
                variant="contained"
                size="large"
                color={inCart ? "error" : "primary"}
                onClick={handleCartToggle}
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </Button>
            </Box>
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              component={Link}
              to="/"
            >
              Go Back
            </Button>
          </Card>
        </div>
      </div>

  
    </div>
  );
};

export default Detail;