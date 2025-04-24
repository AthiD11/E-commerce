import React, { useEffect, useState } from 'react';
import Admincard from '../Components/Admincard';
import {
  Button,
  Typography,
  Container,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Adminhomepage = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch('https://server-amber-iota-12.vercel.app/api/products/');
      const data = await response.json();
      setData(data);
    };
    fetchdata();
  }, []);

  return (
    <>
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(to right, #1de9b6, #651fff)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
            Admin Dashboard
          </Typography>
          <Button component={Link} to="/" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
            Home
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #f0f4ff, #e3f2fd)',
          py: 6,
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                flex: 1,
              }}
            >
              All Products
            </Typography>

            <Button
              component={Link}
              to="/addproduct"
              size="large"
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            >
              + Add Product
            </Button>
          </Box>

          {/* Product Grid */}
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: '1fr',  // 1 column for small screens
                sm: '1fr 1fr', // 2 columns for medium screens
                md: '1fr 1fr 1fr', // 3 columns for large screens
              },
              justifyItems: 'center',
            }}
          >
            {Data.map((item) => (
              <Admincard
                key={item._id}
                name={item.name}
                image={item.images[0]}
                hover={item.images[1]}
                alt={item._id}
                brand={item.brand}
                price={item.price}
                dis={item.discountprice}
                cat={item.category}
                id={item._id}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          py: 3,
          mt: 4,
          background: 'linear-gradient(to right, #1de9b6, #651fff)',
          color: '#ffffff',
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          © {new Date().getFullYear()} Gearstrike Admin Panel. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Adminhomepage;
