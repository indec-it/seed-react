import reducer, {
  loginRequest,
  loginSuccess,
  loginFailure,
  validateSessionRequest,
  validateSessionSuccess,
  validateSessionFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure
} from '../sessionSlice';

const initialState = {
  isLoggingIn: false,
  token: null,
  hasError: false,
  user: null,
  validatingSession: false,
  closingSession: false
};

it('should return the initial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual(initialState);
});

it('should handle loginRequest', () => {
  expect(reducer({}, loginRequest())).toEqual({isLoggingIn: true, hasError: false});
});

it('should handle loginSuccess', () => {
  const response = {token: '123', user: {id: '123'}};
  expect(reducer({isLoggingIn: true}, loginSuccess(response))).toEqual(
    {
      isLoggingIn: false,
      token: response.token,
      user: response.user,
      hasError: false
    }
  );
});

it('should handle loginFailure', () => {
  expect(reducer({isLoggingIn: true}, loginFailure())).toEqual(
    {
      isLoggingIn: false,
      token: null,
      user: null,
      hasError: true
    }
  );
});

it('should handle validateSessionRequest', () => {
  expect(reducer({}, validateSessionRequest())).toEqual({validatingSession: true});
});

it('should handle validateSessionSuccess', () => {
  const response = {token: '123', user: {id: '123'}};
  expect(reducer({validatingSession: true}, validateSessionSuccess(response))).toEqual({
    validatingSession: false,
    user: response.user,
    token: response.token
  });
});

it('should handle validateSessionFailure', () => {
  expect(reducer({validatingSession: true}, validateSessionFailure())).toEqual({
    validatingSession: false,
    user: null,
    token: null
  });
});

it('should handle logoutRequest', () => {
  expect(reducer({}, logoutRequest())).toEqual({closingSession: true});
});

it('should handle logoutSuccess', () => {
  expect(reducer({closingSession: true, token: '123', user: {id: '123'}}, logoutSuccess())).toEqual({
    closingSession: false, token: null, user: null
  });
});

it('should handle logoutFailure', () => {
  expect(reducer({closingSession: true}, logoutFailure())).toEqual({closingSession: false});
});
