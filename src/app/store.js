import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';

import {reducers, rootSaga} from '@/state';

const saga = createSagaMiddleware();

const {NODE_ENV} = process.env;

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
  middleware: [saga, routerMiddleware],
  devTools: NODE_ENV === 'development'
});

export const history = createReduxHistory(store);

saga.run(rootSaga);
