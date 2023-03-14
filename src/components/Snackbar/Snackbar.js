import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import MuiSnackbar from '@mui/material/Snackbar';

import severityMessages from '@/constants/severityMessages';

function Snackbar({
  open, message, close, severity
}) {
  return (
    <MuiSnackbar open={open} autoHideDuration={6000} onClose={close}>
      <Alert onClose={close} severity={severity} sx={{width: '100%'}}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
}

Snackbar.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(Object.values(severityMessages)).isRequired
};

export default Snackbar;
