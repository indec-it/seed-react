import {useState} from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Login({login, isLoggingIn, hasError}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container maxWidth="sm">
      <Stack direction="column" justifyContent="center" alignItems="center" sx={{height: '100vh'}}>
        <Typography data-testid="title">Login</Typography>
        <TextField
          placeholder="Username"
          fullWidth
          onChange={e => setUsername(e.target.value)}
          value={username}
          data-testid="username"
          margin="normal"
        />
        <TextField
          type="password"
          placeholder="Password"
          fullWidth
          onChange={e => setPassword(e.target.value)}
          value={password}
          data-testid="password"
          margin="normal"
        />
        <Button
          onClick={() => login({username, password})}
          data-testid="login-button"
          disabled={!username || !password || isLoggingIn}
          variant="contained"
        >
          Login
        </Button>
        {hasError && <Typography color="red.500">Login failed</Typography>}
      </Stack>
    </Container>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default Login;
