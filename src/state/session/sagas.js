import {call, takeLatest, put} from 'redux-saga/effects';
import {push} from 'redux-first-history';

import {apiRoutes, routes} from '@/constants';
import {http, tokenService} from '@/services';

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  validateSessionFailure,
  validateSessionRequest,
  validateSessionSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess
} from './sessionSlice';

export function* login({payload}) {
  try {
    const {token, user} = yield call(http.post, apiRoutes.FAKE_API_LOGIN, payload);
    yield call(tokenService.setToken, token);
    yield put(loginSuccess({token, user}));
    yield put(push(routes.HOME));
  } catch (err) {
    yield put(loginFailure());
  }
}

export function* validateSession({payload}) {
  try {
    const token = payload ? payload.split('accessToken=')[1] : tokenService.getToken();
    if (token) {
      const {user} = yield call(http.post, apiRoutes.FAKE_VALIDATE_SESSION, {token});
      yield put(validateSessionSuccess({user, token}));
      yield call(tokenService.setToken, token);
      yield put(push(routes.HOME));
      return;
    }
    throw new Error('General Error.');
  } catch (err) {
    yield call(tokenService.removeToken);
    yield put(validateSessionFailure());
  }
}

export function* logout() {
  try {
    yield call(tokenService.removeToken);
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure());
  }
}

export default function* sessionSaga() {
  yield takeLatest(loginRequest, login);
  yield takeLatest(validateSessionRequest, validateSession);
  yield takeLatest(logoutRequest, logout);
}
