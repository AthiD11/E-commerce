import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Joy UI imports
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

const Registerpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email ,setEmail]=useState('')
  const [message, setMessage] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 5) {
      setMessage("Password must be at least 5 characters long.");
      return;
    }
  
    try {
      const response = await axios.post('https://server-amber-iota-12.vercel.app/api/auth/register', {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
      navigate('/login')
    } catch (error) {
      console.error('Registration Failed:', error.response?.data?.error);
      setMessage(error.response?.data?.error || 'Registration failed.');
    }
  };

  return (
    <CssVarsProvider>
      <CssBaseline />
      <main>
        <Sheet
          sx={{
            width: { xs: '90%', sm:400 },
            mx: 'auto',
            my: { xs: 10, sm:25 },
            py: 6,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <form onSubmit={handleSubmit}>
            <Typography level="h1" component="h1" sx={{ mb: 2 }}>
              <b>Register</b>
            </Typography>
            <Typography level="body-sl">Create a new account</Typography>

            {message && (
              <Typography level="body-sm" color="primary" sx={{ mt: 1 }}>
                {message}
              </Typography>
            )}

            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>

            <FormControl sx={{ mt: 2 }}>
              <FormLabel>E-Mail</FormLabel>
              <Input
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>

            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>

            <Button type="submit" sx={{ my: 3 }} >
              Register
            </Button>

            <Typography
              endDecorator={<Link href="/login">Back to login</Link>}
              sx={{ fontSize: 'sl', alignSelf: 'center' }}
            >
              Already have an account?
            </Typography>
          </form>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
};

export default Registerpage