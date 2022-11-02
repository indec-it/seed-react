import {lazy} from 'react';

import Loader from '@components/Loader';

const Login = Loader(lazy(() => import('@pages/Login')));

const offlineRoutes = [
  {
    path: '*',
    element: <Login />
  }
];

export default offlineRoutes;
