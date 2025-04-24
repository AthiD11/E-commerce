import React from 'react';
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Box,
} from '@mui/material';

const Admincard = (props) => {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          mb: 2,
          p: 2,
          boxShadow: 3,
          borderRadius: 2,
          gap: 2,
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          image={props.image}
          alt={props.name}
          sx={{
            width: { xs: 60, sm: 40 },
            height: { xs: 60, sm: 40 },
            objectFit: 'cover',
            borderRadius: 1,
          }}
        />

        {/* Info Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            flex: 1,
            gap: 2,
          }}
        >
          <Box sx={{ minWidth: '50px' }}>
            <Typography variant="h6" fontWeight={400} sx={{
                 fontSize: {
                    xs: "0.8rem", // Adjusted font size for mobile screens
                    sm: "1rem", // Adjusted font size for small screens
                  },
            }} >
              {props.name}
            </Typography>
          </Box>
          <Box sx={{ minWidth: '50px' }}>
            <Typography variant="subtitle2" color="text.secondary">
              Brand: <span style={{color:'violet'}}> {props.brand} </span>
            </Typography>
          </Box>
          <Box sx={{ minWidth: '50px' }}>
            <Typography variant="subtitle2" color="text.secondary">
              Category: {props.cat}
            </Typography>
          </Box>
          <Box sx={{ minWidth: '50px' }}>
            <Typography variant="subtitle1" color="primary">
              ₹{props.dis}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default Admincard;