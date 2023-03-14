import {call, put} from 'redux-saga/effects';
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
  logoutSuccess,
  logoutFailure
} from '@/state/session/sessionSlice';
import * as sagas from '@/state/session/sagas';

describe('login', () => {
  it('handles successful attempts', () => {
    const payload = {username: 'username', password: 'password'};
    const response = {token: 'token'};

    const action = loginRequest(payload);
    const saga = sagas.login(action);
    expect(saga.next()).toEqual({
      done: false,
      value: call(http.post, apiRoutes.FAKE_API_LOGIN, payload)
    });
    expect(saga.next(response)).toEqual({
      done: false,
      value: call(tokenService.setToken, response.token)
    });
    expect(saga.next()).toEqual({
      done: false,
      value: put(loginSuccess({token: response.token, user: response.user}))
    });
    expect(saga.next()).toEqual({
      done: false,
      value: put(push(routes.HOME))
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined
    });
  });

  it('with error instance', () => {
    const payload = {username: 'username', password: 'password'};

    const action = loginRequest(payload);
    const saga = sagas.login(action);
    expect(saga.next()).toEqual({
      done: false,
      value: call(http.post, apiRoutes.FAKE_API_LOGIN, payload)
    });
    const error = new Error('Oops!');
    expect(saga.throw(error)).toEqual({
      done: false,
      value: put(loginFailure())
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined
    });
  });
});

describe('validateSession', () => {
  it('handles successful attempts', () => {
    const payload = '?accessToken=123';
    const response = {user: {id: 1}};

    const action = validateSessionRequest(payload);
    const saga = sagas.validateSession(action);
    expect(saga.next()).toEqual({
      done: false,
      value: call(http.post, apiRoutes.FAKE_VALIDATE_SESSION, {token: '123'})
    });
    expect(saga.next(response)).toEqual({
      done: false,
      value: put(validateSessionSuccess({token: '123', user: response.user}))
    });
    expect(saga.next()).toEqual({
      done: false,
      value: call(tokenService.setToken, '123')
    });
    expect(saga.next()).toEqual({
      done: false,
      value: put(push(routes.HOME))
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined
    });
  });

  it('with error instance', () => {
    const action = validateSessionRequest();
    const saga = sagas.validateSession(action);
    expect(saga.next()).toEqual({
      done: false,
      value: call(tokenService.removeToken)
    });
    expect(saga.next()).toEqual({
      done: false,
      value: put(validateSessionFailure())
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined
    });
  });
});

describe('logout', () => {
  it('handles successful attempts', () => {
    const saga = sagas.logout();
    expect(saga.next()).toEqual({
      done: false,
      value: call(tokenService.removeToken)
    });
    expect(saga.next()).toEqual({
      done: false,
      value: put(logoutSuccess())
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined
    });
  });

  it('with error instance', () => {
    const saga = sagas.logout();
    expect(saga.next()).toEqual({
      done: false,
      value: call(tokenService.removeToken)
    });
    const error = new Error('Oops!');
    expect(saga.throw(error)).toEqual({
      done: false,
      value: put(logoutFailure())
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined
    });
  });
});
