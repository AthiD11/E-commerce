import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
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
  );
};

export default Footer;
