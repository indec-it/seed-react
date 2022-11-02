import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggingIn: false,
  token: null,
  hasError: false,
  user: null,
  validatingSession: false,
  closingSession: false
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    loginRequest: state => { state.isLoggingIn = true; state.hasError = false; },
    loginSuccess: (state, action) => {
      const {token, user} = action.payload;
      state.isLoggingIn = false;
      state.token = token;
      state.user = user;
      state.hasError = false;
    },
    loginFailure: state => {
      state.isLoggingIn = false;
      state.token = null;
      state.user = null;
      state.hasError = true;
    },
    validateSessionRequest: state => { state.validatingSession = true; },
    validateSessionSuccess: (state, action) => {
      const {token, user} = action.payload;
      state.validatingSession = false;
      state.user = user;
      state.token = token;
    },
    validateSessionFailure: state => { state.validatingSession = false; state.token = null; state.user = null; },
    logoutRequest: state => { state.closingSession = true; },
    logoutSuccess: state => { state.closingSession = false; state.token = null; state.user = null; },
    logoutFailure: state => { state.closingSession = false; }
  }
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  validateSessionRequest,
  validateSessionSuccess,
  validateSessionFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure
} = sessionSlice.actions;

export default sessionSlice.reducer;
