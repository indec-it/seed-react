import {call, put} from 'redux-saga/effects';
import {push} from 'redux-first-history';

import {apiRoutes, routes} from '@constants';
import {http} from '@services';
import {loginRequest, loginSuccess, loginFailure} from '@state/session/sessionSlice';
import * as sagas from '@state/session/sagas';

describe('login', () => {
  it('handles successful attempts', () => {
    const payload = {username: 'username', password: 'password'};
    const response = {token: 'token'};

    const action = loginRequest(payload);
    const saga = sagas.login(action);
    expect(saga.next()).toEqual({
      done: false,
      value: call(http.post, apiRoutes.FAKE_API_LOGIN, {email: payload.username, password: payload.password})
    });
    expect(saga.next(response)).toEqual({
      done: false,
      value: put(loginSuccess({token: response.token}))
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
      value: call(http.post, apiRoutes.FAKE_API_LOGIN, {email: payload.username, password: payload.password})
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
