import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useLocation, useRoutes} from 'react-router-dom';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import offlineRoutes from './offline';
import onlineRoutes from './online';

function Routes({
  validateToken, validatingSession, user, token
}) {
  const location = useLocation();
  useEffect(() => {
    validateToken(location.hash);
  }, []);

  if (validatingSession) {
    return (
      <Container maxWidth="sm">
        <CircularProgress />
      </Container>
    );
  }

  return useRoutes(!validatingSession && user && user.id && token ? onlineRoutes : offlineRoutes);
}

Routes.propTypes = {
  validateToken: PropTypes.func.isRequired,
  token: PropTypes.string,
  validatingSession: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

Routes.defaultProps = {
  user: null,
  token: null
};

export default Routes;
