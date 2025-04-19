import React, { useState, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../Components/AuthContext';
import { useNavigate } from 'react-router-dom';

// Joy UI imports
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  // const { setToken } = useContext(AuthContext);
  const {setToken}=useContext(AuthContext)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        username,
        password,
      });
      const {token,role}=response.data
      setToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('role',role)
      localStorage.removeItem('joy-color-scheme-light');
      localStorage.removeItem('joy-color-scheme-dark');
      localStorage.removeItem('joy-mode');

      
      
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
    } catch (error) {
      console.error('Authentication failed', error);
      setToken(null);
      localStorage.removeItem('token');
      setErrorMessage(error.response?.data || 'An unexpected error occurred');
    }
  };

  return (
    <CssVarsProvider >
      <CssBaseline />
      <main>
        <Sheet
          sx={{
            width: { xs: '90%', sm: 400 },
            mx: 'auto',
            my: { xs: 10, sm: 25 },
            py: 6,
            px: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <form onSubmit={handleSubmit}>
            <Typography level="h1" component="h1" style={{marginBottom:10}}>
              <b>Login</b>
            </Typography>
            <Typography level="body-sm">Please enter your credentials</Typography>

            {errorMessage && (
              <Typography level="body-sm" color="danger">
                {errorMessage}
              </Typography>
            )}

            <FormControl>
              <FormLabel style={{marginTop:20}} >Username / Email</FormLabel>
              <Input
                name="username"
                // placeholder="Enter your username/email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>

            <FormControl style={{marginTop:20}}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                // placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>

            <Button type="submit" sx={{ my: 3,  }}>
              Login
            </Button>

            <Typography
              endDecorator={<Link href="/register">Sign up</Link>}
              sx={{ fontSize: 'sl', alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </form>
        </Sheet>
      </main>
      
    </CssVarsProvider>
  );
};

export default Loginpage;