import reducer, {getAppStatusRequest, getAppStatusSuccess, getAppStatusFailure, setSnackbar} from '../appSlice';

const initialState = {
  gettingStatus: false,
  status: 'pending',
  snackbar: {
    open: false,
    message: '',
    severity: 'success'
  }
};

it('should return the initial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual(initialState);
});

it('should handle getAppStatusRequest', () => {
  expect(reducer({}, getAppStatusRequest())).toEqual({gettingStatus: true, status: 'pending'});
});

it('should handle getAppStatusSuccess', () => {
  expect(reducer({gettingStatus: true, status: 'pending'}, getAppStatusSuccess({status: 'maintenance'}))).toEqual({
    gettingStatus: false,
    status: 'maintenance'
  });
});

it('should handle getAppStatusFailure', () => {
  expect(reducer({gettingStatus: true, status: 'pending'}, getAppStatusFailure())).toEqual({
    gettingStatus: false,
    status: 'pending'
  });
});

it('should handle setSnackbar', () => {
  expect(reducer({}, setSnackbar({open: true, message: 'test', severity: 'error'}))).toEqual({
    snackbar: {open: true, message: 'test', severity: 'error'}
  });
});
