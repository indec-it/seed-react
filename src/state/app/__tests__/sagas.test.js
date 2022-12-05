import {call, put} from 'redux-saga/effects';

import {apiRoutes} from '@constants';
import {http} from '@services';
import {
  getAppStatusFailure, getAppStatusSuccess, setSnackbar
} from '@state/app/appSlice';
import * as sagas from '@state/app/sagas';

describe('getAppStatus', () => {
  it('handles successful attempts', () => {
    const response = {status: 'maintenance'};

    const saga = sagas.getAppStatus();
    expect(saga.next()).toEqual({
      done: false,
      value: call(http.get, apiRoutes.GET_APP_STATUS)
    });
    expect(saga.next(response)).toEqual({
      done: false,
      value: put(getAppStatusSuccess({status: response.status}))
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined
    });
  });

  it('with error instance', () => {
    const saga = sagas.getAppStatus();
    expect(saga.next()).toEqual({
      done: false,
      value: call(http.get, apiRoutes.GET_APP_STATUS)
    });
    const error = new Error('Oops!');
    expect(saga.throw(error)).toEqual({
      done: false,
      value: put(getAppStatusFailure())
    });
    expect(saga.next()).toEqual({
      done: false,
      value: put(
        setSnackbar({
          open: true,
          message: 'Ha ocurrido un error, por favor intentelo más tarde.',
          severity: 'error'
        })
      )
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined
    });
  });
});
