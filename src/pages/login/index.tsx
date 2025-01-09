import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  Container,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import LogoComponent from '../../components/logoComponent';
import { useNavigationManager } from '../../navigation';

const RootContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/api/placeholder/1920/1080")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const LoginContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  flexGrow: 1,
  padding: '24px',
});


const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { goTo } = useNavigationManager();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    goTo('dashboard');
  };

  return (
    <RootContainer>
      <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
        <LogoComponent />
      </Box>

      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <Typography sx={{ color: 'white' }}>
          Welcome to Inspection Insight
        </Typography>
      </Box>

      <LoginContainer maxWidth="sm">
        <Card sx={{ width: '100%', bgcolor: 'rgba(255, 255, 255, 0.95)' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Login
            </Typography>

            <Typography color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="EMAIL"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sample@email.com"
                margin="normal"
                variant="outlined"
              />

              <TextField
                fullWidth
                label="PASSWORD"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Link href="#" underline="hover" color="primary">
                  FORGOT?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
                onClick={handleSubmit}
              >
                Login
              </Button>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="body2" component="span">
                  Don't have an account?{' '}
                </Typography>
                <Link href="#" underline="hover" color="primary">
                  Sign up
                </Link>
              </Box>
            </form>
          </CardContent>
        </Card>
      </LoginContainer>
    </RootContainer>
  );

};

export default LoginPage;