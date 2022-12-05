import {lazy} from 'react';

import Loader from '@components/Loader';

const Maintenance = Loader(lazy(() => import('@pages/Maintenance')));

const maintenanceRoutes = [
  {
    path: '*',
    element: <Maintenance />
  }
];

export default maintenanceRoutes;
