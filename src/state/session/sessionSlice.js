import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggingIn: false,
  token: null,
  hasError: false
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    loginRequest: state => { state.isLoggingIn = true; },
    loginSuccess: (state, action) => {
      const {token} = action.payload;
      state.isLoggingIn = false;
      state.token = token;
      state.hasError = false;
    },
    loginFailure: state => {
      state.isLoggingIn = false;
      state.token = null;
      state.hasError = true;
    }
  }
});

export const {loginRequest, loginSuccess, loginFailure} = sessionSlice.actions;

export default sessionSlice.reducer;
