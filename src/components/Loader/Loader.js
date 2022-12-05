import {Suspense} from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = Component => function loaderFunction(props) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loader;
