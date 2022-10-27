import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Home({onClick}) {
  return (
    <Container maxWidth="md">
      <Stack direction="column" alignItems="center" spacing={10}>
        <Typography fontSize="3xl">Welcome to React Seed</Typography>
        <Button variant="contained" onClick={onClick} data-testid="redirect-button">
          Go to login page
        </Button>
      </Stack>
    </Container>
  );
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Home;
