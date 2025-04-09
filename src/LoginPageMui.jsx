import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Checkbox,
  FormControlLabel,
  Stack,
  Paper,
  Container,
} from '@mui/material';

const LoginPageMui = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === '1234') {
      alert('로그인 성공!');
    } else {
      setErrorMsg('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <Container 
      maxWidth="100%" 
      disableGutters 
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f9f9f9',
        margin: 0,
        padding: 0,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 350,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography component="h1" variant="h5" mb={2}>
          Sign in
        </Typography>
        
        <Box component="form" onSubmit={handleLogin}>
          <Typography variant="body2">Email</Typography>
          <TextField
            fullWidth
            label="your@email.com"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Typography variant="body2" mt={1}>Password</Typography>
          <TextField
            fullWidth
            label="password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormControlLabel
            control={
              <Checkbox 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
              />
            }
            label="Remember me"
            sx={{ mt: 1 }}
          />

          {errorMsg && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMsg}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: 'black',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Sign in
          </Button>

          <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
            <Typography variant="body2">
              <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>
                Forgot your password?
              </a>
            </Typography>
          </Stack>

          <Typography textAlign="center" sx={{ mt: 2, mb: 1 }}>
            or
          </Typography>

          {/* 소셜 로그인 버튼 */}
          {['Google', 'Facebook'].map((provider) => (
            <Button
              key={provider}
              fullWidth
              variant="outlined"
              sx={{
                mt: provider === 'Facebook' ? 2 : 0,
                backgroundColor: '#fff',
                textTransform: 'capitalize',
                color: 'black',
                borderColor: '#ccc',
              }}
              href={`https://www.${provider.toLowerCase()}.com${provider === 'Facebook' ? '/login' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign in with {provider}
            </Button>
          ))}
          
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Don't have an account?{' '}
            <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Sign up
            </a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPageMui;