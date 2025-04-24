import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Stack,
  Button,
  Grid,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const CartProduct = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, removeCart } = useContext(AuthContext);
  const imageSrc = product?.images?.[0];

  return (
    <Grid item xs={12} md={12}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Responsive flex direction
          mb: 2,
          p: 2,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          image={imageSrc}
          alt={product.name}
          sx={{
            width: { xs: '100%', sm: 140 },
            height: { xs: 200, sm: 140 },
            objectFit: 'cover',
            borderRadius: 1,
          }}
        />
        <Box sx={{ flex: 1, ml: { sm: 2 }, mt: { xs: 2, sm: 0 } }}>
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              ₹{product.discountprice}
            </Typography>
          </CardContent>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ px: 2, pb: 1, flexWrap: 'wrap' }}
          >
            <IconButton color="primary" onClick={() => decreaseQuantity(product)}>
              <Remove />
            </IconButton>
            <Typography>{product.quantity}</Typography>
            <IconButton color="primary" onClick={() => increaseQuantity(product)}>
              <Add />
            </IconButton>
            <Button
              variant="outlined"
              color="error"
              startIcon={<Delete />}
              onClick={() => removeCart(product._id)}
              size="small"
            >
              Remove
            </Button>
          </Stack>
        </Box>
      </Card>
    </Grid>
  );
};

export default CartProduct;