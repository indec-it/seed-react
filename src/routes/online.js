import {lazy} from 'react';

import Loader from '@/components/Loader';

const Home = Loader(lazy(() => import('@/pages/Home')));

const onlineRoutes = [
  {
    path: '*',
    element: <Home />
  }
];

export default onlineRoutes;
