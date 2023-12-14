import {createSlice} from '@reduxjs/toolkit';

import appStatuses from '@/constants/appStatuses';
import severityMessages from '@/constants/severityMessages';

const initialState = {
  gettingStatus: false,
  status: appStatuses.PENDING,
  snackbar: {
    open: false,
    message: '',
    severity: severityMessages.SUCCESS
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getAppStatusRequest: state => {
      state.gettingStatus = true;
      state.status = appStatuses.PENDING;
    },
    getAppStatusSuccess: (state, action) => {
      const {status} = action.payload;
      state.status = status;
      state.gettingStatus = false;
    },
    getAppStatusFailure: state => {
      state.gettingStatus = false;
      state.status = appStatuses.PENDING;
    },
    setSnackbar: (state, action) => {
      const {open, message, severity} = action.payload;
      state.snackbar = {open, message, severity};
    }
  }
});

export const {getAppStatusRequest, getAppStatusSuccess, getAppStatusFailure, setSnackbar} = appSlice.actions;

export default appSlice.reducer;
