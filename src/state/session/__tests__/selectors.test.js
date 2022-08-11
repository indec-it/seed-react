import * as selectors from '../selectors';

describe('hasError', () => {
  describe('when `state.session.hasError` is `true`', () => {
    it('should return `true``', () => {
      const state = {session: {hasError: true}};
      expect(selectors.hasError(state)).toBe(true);
    });
  });

  describe('when `state.session.hasError` is `false`', () => {
    it('should return `false``', () => {
      const state = {session: {hasError: false}};
      expect(selectors.hasError(state)).toBe(false);
    });
  });
});

describe('isLoggingIn', () => {
  describe('when `state.session.isLoggingIn` is `true`', () => {
    it('should return `true``', () => {
      const state = {session: {isLoggingIn: true}};
      expect(selectors.isLoggingIn(state)).toBe(true);
    });
  });

  describe('when `state.session.isLoggingIn` is `false`', () => {
    it('should return `false``', () => {
      const state = {session: {isLoggingIn: false}};
      expect(selectors.isLoggingIn(state)).toBe(false);
    });
  });
});
