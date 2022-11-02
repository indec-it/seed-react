import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Home({logout}) {
  return (
    <Container maxWidth="md">
      <Stack direction="column" alignItems="center" spacing={10}>
        <Typography fontSize="3xl">Welcome to React Seed</Typography>
        <Button variant="contained" onClick={logout} data-testid="close-session-button">
          Cerrar sesion
        </Button>
      </Stack>
    </Container>
  );
}

Home.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Home;
