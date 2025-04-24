import * as React from 'react';
import { Box, Toolbar, Button, Typography, Badge, AppBar, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom'; // ✅ FIXED: Correct import
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AuthContext } from './AuthContext';

const Navbar = ({ setsearch }) => {
  const { cart } = React.useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => {
    // Placeholder for actual logout logic, like clearing tokens or session
    console.log('User logged out');
    // For example, you can clear the session like this:
    // localStorage.removeItem('authToken');
    // Redirect to the homepage or login page if needed
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(to right, #1de9b6, #651fff)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ fontWeight: 700, color: '#ffffff' }}>
            GEARSTRIKE
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: { xs: 1, sm: 0 } }}>
            <Button component={Link} to="/" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              Home
            </Button>
            {/* Cart Icon with Badge showing number of items in the cart */}
            <Button component={Link} to="/cart" sx={{ color: '#ffffff' }}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </Badge>
            </Button>
            {/* Logout Button */}
            <Button component={Link} to="/login" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
