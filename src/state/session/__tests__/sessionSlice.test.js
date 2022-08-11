import reducer, {loginFailure, loginRequest, loginSuccess} from '../sessionSlice';

const initialState = {
  isLoggingIn: false,
  token: null,
  hasError: false
};

it('should return the initial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual(initialState);
});

it('should handle loginRequest', () => {
  expect(reducer(initialState, loginRequest())).toEqual(
    {
      isLoggingIn: true,
      token: null,
      hasError: false
    }
  );
});

it('should handle loginSuccess', () => {
  expect(reducer({isLoggingIn: true, token: null, hasError: false}, loginSuccess({token: 'token'}))).toEqual(
    {
      isLoggingIn: false,
      token: 'token',
      hasError: false
    }
  );
});

it('should handle loginFailure', () => {
  expect(reducer({isLoggingIn: true, token: null, hasError: false}, loginFailure())).toEqual(
    {
      isLoggingIn: false,
      token: null,
      hasError: true
    }
  );
});
