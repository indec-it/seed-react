import {Provider} from 'react-redux';
import {ChakraProvider} from '@chakra-ui/react';
import {HistoryRouter as Router} from 'redux-first-history/rr6';

import {history, store} from '@app/store';
import Routes from '@routes';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
