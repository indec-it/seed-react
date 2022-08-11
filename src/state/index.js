import {all} from 'redux-saga/effects';

import {reducer as sessionSlice, saga as sessionSaga} from './session';

export const reducers = {
  session: sessionSlice
};

export function* rootSaga() {
  yield all([sessionSaga()]);
}
