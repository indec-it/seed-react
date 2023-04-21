import {call, takeLatest, put} from 'redux-saga/effects';

import {
  apiRoutes, errorMessages, severityMessages
} from '@/constants';
import {http} from '@/services';

import {
  getAppStatusFailure, getAppStatusRequest, getAppStatusSuccess, setSnackbar
} from './appSlice';

export function* getAppStatus() {
  try {
    const {status} = yield call(http.get, apiRoutes.GET_APP_STATUS);
    yield put(getAppStatusSuccess({status}));
  } catch (err) {
    yield put(getAppStatusFailure());
    yield put(setSnackbar({open: true, message: errorMessages.AN_ERROR_OCURRED, severity: severityMessages.ERROR}));
  }
}

export default function* appSaga() {
  yield takeLatest(getAppStatusRequest, getAppStatus);
}
