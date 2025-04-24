import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
  AppBar,
  Toolbar,
  CssBaseline,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Createproduct = () => {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    category: '',
    price: '',
    discountprice: '',
    quantity: '',
    description: '',
    images: '',
  });

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...form,
        images: form.images.split(',').map((img) => img.trim()),
      };
      await axios.post('https://server-amber-iota-12.vercel.app/api/products/', productData);
      setSuccess('Product created successfully!');
      setError(null);
      setForm({
        name: '',
        brand: '',
        category: '',
        price: '',
        discountprice: '',
        quantity: '',
        description: '',
        images: '',
      });
    } catch (err) {
      setError('Failed to create a product. Please try again.');
      setSuccess(null);
    }
  };

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
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
            Admin Dashboard
          </Typography>
          <Button component={Link} to="/" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
            Home
          </Button>
        </Toolbar>
      </AppBar>

      {/* Page Body */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #f0f4ff, #e3f2fd)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          py: 4,
        }}
      >
        <Container maxWidth="sm" sx={{ py: 6, backgroundColor: 'white', borderRadius: 3, boxShadow: 3 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CREATE PRODUCT
          </Typography>

          {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <TextField label="Name" name="name" value={form.name} onChange={handleChange} required />
            <TextField label="Brand" name="brand" value={form.brand} onChange={handleChange} required />
            <TextField label="Category" name="category" value={form.category} onChange={handleChange} required />
            <TextField label="Price" name="price" type="number" value={form.price} onChange={handleChange} required />
            <TextField label="Discount Price" name="discountprice" type="number" value={form.discountprice} onChange={handleChange} />
            <TextField label="Quantity" name="quantity" type="number" value={form.quantity} onChange={handleChange} />
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              multiline
              minRows={3}
            />
            <TextField
              label="Image URLs (comma-separated)"
              name="images"
              value={form.images}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
                  opacity: 0.9,
                },
              }}
            >
              ADD PRODUCT
            </Button>
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
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          © {new Date().getFullYear()} Gearstrike Admin Panel. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Createproduct;
