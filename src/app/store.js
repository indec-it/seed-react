import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';

import {reducers, rootSaga} from '@state';

const saga = createSagaMiddleware();

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({history: createBrowserHistory()});

export const store = configureStore({
  reducer: {
    router: routerReducer,
    ...reducers
  },
  middleware: [saga, routerMiddleware]
});

export const history = createReduxHistory(store);

saga.run(rootSaga);
