import {all} from 'redux-saga/effects';

import {reducer as appSlice, saga as appSaga} from './app';
import {reducer as sessionSlice, saga as sessionSaga} from './session';

export const reducers = {
  app: appSlice,
  session: sessionSlice
};

export function* rootSaga() {
  yield all([appSaga(), sessionSaga()]);
}
