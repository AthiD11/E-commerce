import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const detail = ({detail}) => {
  const images = detail?.images || [];
  // const { addtocart } = useContext(AuthContext);
// console.log(detail);
  if (!detail) return <p>Loading...</p>;

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
              {images.map((img, index) => (
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
            {images.length > 1 && (
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
                  fontSize: { xs: "1.3rem", md: "1.6rem" },
                }}
              >
                {detail?.name || "Loading..."}
              </Typography>
              <Typography variant="h6">Brand: {detail?.brand || "N/A"}</Typography>
              <Typography variant="h6">Category: {detail?.category || "N/A"}</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Price:{" "}
                <span style={{ textDecoration: "line-through", marginRight: "8px" }}>
                  ₹{detail?.price}
                </span>
                Buy at <u>₹{detail?.discountprice}</u>
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.6rem" },
                  }}
                >
                  About the Product:
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1.3rem" },
                  }}
                >
                  {detail?.description || "No description available."}
                </Typography>
              </Box>
            </CardContent>

            <Box sx={{ display: "flex", gap: 2, px: 2, pb: 2 }}>
              <Button variant="contained" color="error">
                Buy Now
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
              
              >
                Add to Cart
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

      {/* Optional style block if needed for hover effects */}
      <style>{`
        .mainImg,
        .hoverImg {
          transition: opacity 0.3s ease;
        }

        .position-relative:hover .mainImg {
          opacity: 0 !important;
        }

        .position-relative:hover .hoverImg {
          opacity: 1 !important;
        }

        .object-fit-cover {
          object-fit: cover;
        }

        .transition-opacity {
          transition: opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default detail;