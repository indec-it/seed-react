import {connect} from 'react-redux';

import {setSnackbar} from '@/state/app/appSlice';
import {getSnackbarMessage, getSnackbarOpen, getSnackbarSeverity} from '@/state/app/selectors';
import severityMessages from '@/constants/severityMessages';

import Snackbar from './Snackbar';

const mapStateToProps = state => ({
  message: getSnackbarMessage(state),
  open: getSnackbarOpen(state),
  severity: getSnackbarSeverity(state)
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(setSnackbar({open: false, message: '', severity: severityMessages.SUCCESS}))
});

const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(Snackbar);

export default SnackbarContainer;
