import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import Ccc from '../Components/Carousel';
import {
  Box,
  Container,
  Typography,
  Grid,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Badge,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Cards from '../Components/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from '../Components/Navbar';

const Homepage = () => {
  const [Search, setSearch] = useState('');
  const [Category, setCategory] = useState('');
  const [Data, setData] = useState([]);
  const [cart, setCart] = useState([]); // State to track items in the cart

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://server-amber-iota-12.vercel.app/api/products/');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const uniqueCategories = [...new Set(Data.map(item => item.category))];

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleLogout = () => {
    // Placeholder for actual logout logic, like clearing tokens or session
    console.log('User logged out');
    // For example, you can clear the session like this:
    // localStorage.removeItem('authToken');
    // Redirect to the homepage or login page if needed
  };

  return (
    <>
      <CssBaseline />


      <Navbar/>

      
      <Box sx={{ py: { xs: 3, sm: 5 }, backgroundColor: '#f0f4ff' }}>
        <Container maxWidth="lg">
          <Ccc />
        </Container>
      </Box>

      {/* Product Section */}
      <Box sx={{ py: { xs: 4, sm: 6 }, background: 'linear-gradient(to bottom right, #f0f4ff, #e3f2fd)' }}>
        <Container>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 2,
              background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Products
          </Typography>

          {/* Search and Category Filters */}
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              px: isMobile ? 2 : 10,
            }}
          >
            <input
              type="text"
              placeholder="Search Products..."
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: '10px',
                flex: 1,
                minWidth: isMobile ? '100%' : '300px',
                borderRadius: '20px',
                border: '1px solid #ddd',
                fontSize: '16px',
                outline: 'none',
              }}
            />

            <FormControl
              variant="outlined"
              size="small"
              sx={{ minWidth: 180, backgroundColor: '#fff', borderRadius: '20px' }}
            >
              <InputLabel>Category</InputLabel>
              <Select
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
              >
                <MenuItem value="">All</MenuItem>
                {uniqueCategories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Product Grid with even spacing */}
          <Box sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
            <Grid container spacing={3}>
              {Data.filter((item) =>
                item.name.toLowerCase().includes(Search.toLowerCase()) &&
                (Category ? item.category === Category : true)
              ).map((item) => (
                <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
                  <Cards
                    name={item.name}
                    image={item.images?.[0]}
                    hover={item.images?.[1] || item.images?.[0]}
                    alt={item._id}
                    brand={item.brand}
                    price={item.price}
                    dis={item.discountprice}
                    cat={item.category}
                    id={item._id}
                  />
                  {/* Add to Cart Button
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => addToCart(item)}
                      sx={{ borderRadius: '20px' }}
                    >
                      Add to Cart
                    </Button>
                  </Box> */}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          py: 3,
          background: 'linear-gradient(to right, #1de9b6, #651fff)',
          color: '#ffffff',
          px: 2,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          © {new Date().getFullYear()} GEARSTRIKE. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Homepage;
