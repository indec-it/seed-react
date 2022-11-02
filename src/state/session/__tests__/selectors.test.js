import * as selectors from '../selectors';

describe('hasError', () => {
  it('should return `state.session.hasError` value', () => {
    const state = {session: {hasError: true}};
    expect(selectors.hasError(state)).toBe(true);
  });
});

describe('isLoggingIn', () => {
  it('should return `state.session.isLoggingIn` value', () => {
    const state = {session: {isLoggingIn: false}};
    expect(selectors.isLoggingIn(state)).toBe(false);
  });
});

describe('getValidatingSession', () => {
  it('should return `state.session.validatingSession` value', () => {
    const state = {session: {validatingSession: false}};
    expect(selectors.getValidatingSession(state)).toBe(false);
  });
});

describe('getUserLogged', () => {
  it('should return `state.session.user` value', () => {
    const state = {session: {user: {id: 1}}};
    expect(selectors.getUserLogged(state)).toEqual({id: 1});
  });
});

describe('getToken', () => {
  it('should return `state.session.token` value', () => {
    const state = {session: {token: '123'}};
    expect(selectors.getToken(state)).toBe('123');
  });
});
