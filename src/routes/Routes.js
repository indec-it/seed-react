import {Routes as ReactRouterRoutes, Route} from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Login';
import {routes} from '@constants';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
