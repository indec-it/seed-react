import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useLocation, useRoutes} from 'react-router-dom';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import appStatuses from '@/constants/appStatuses';

import offlineRoutes from './offline';
import onlineRoutes from './online';
import maintenanceRoutes from './maintenance';

function Routes({validateToken, validatingSession, user, token, getAppStatus, appStatus}) {
  const location = useLocation();
  useEffect(() => {
    getAppStatus();
  }, []);

  useEffect(() => {
    if (appStatus === appStatuses.LIVE) {
      validateToken(location.hash);
    }
  }, [appStatus]);

  if (validatingSession) {
    return (
      <Container maxWidth="sm">
        <CircularProgress />
      </Container>
    );
  }

  if (appStatus === appStatuses.MAINTENANCE) {
    return useRoutes(maintenanceRoutes);
  }

  return useRoutes(!validatingSession && user && user.id && token ? onlineRoutes : offlineRoutes);
}

Routes.propTypes = {
  getAppStatus: PropTypes.func.isRequired,
  validateToken: PropTypes.func.isRequired,
  token: PropTypes.string,
  validatingSession: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  appStatus: PropTypes.oneOf(Object.values(appStatuses)).isRequired
};

Routes.defaultProps = {
  user: null,
  token: null
};

export default Routes;
