import * as selectors from '../selectors';

describe('getAppStatus', () => {
  it('should return `state.app.status` value', () => {
    const state = {app: {status: 'maintenance'}};
    expect(selectors.getAppStatus(state)).toBe('maintenance');
  });
});

describe('getSnackbarMessage', () => {
  it('should return `state.app.snackbar.message` value', () => {
    const state = {app: {snackbar: {message: 'An error ocurred'}}};
    expect(selectors.getSnackbarMessage(state)).toBe('An error ocurred');
  });
});

describe('getSnackbarSeverity', () => {
  it('should return `state.app.snackbar.severity` value', () => {
    const state = {app: {snackbar: {severity: 'error'}}};
    expect(selectors.getSnackbarSeverity(state)).toBe('error');
  });
});

describe('getSnackbarOpen', () => {
  it('should return `state.app.snackbar.open` value', () => {
    const state = {app: {snackbar: {open: false}}};
    expect(selectors.getSnackbarOpen(state)).toBe(false);
  });
});
