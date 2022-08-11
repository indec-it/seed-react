import {call, takeLatest, put} from 'redux-saga/effects';
import {push} from 'redux-first-history';

import {apiRoutes, routes} from '@constants';
import {http} from '@services';

import {loginRequest, loginSuccess, loginFailure} from './sessionSlice';

export function* login({payload}) {
  try {
    const {username, password} = payload;
    const {token} = yield call(http.post, apiRoutes.FAKE_API_LOGIN, {email: username, password});
    yield put(loginSuccess({token}));
    yield put(push(routes.HOME));
  } catch (err) {
    yield put(loginFailure());
  }
}

export default function* sessionSaga() {
  yield takeLatest(loginRequest, login);
}
