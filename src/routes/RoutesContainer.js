import {connect} from 'react-redux';

import {getAppStatusRequest} from '@state/app/appSlice';
import {getAppStatus} from '@state/app/selectors';
import {validateSessionRequest} from '@state/session/sessionSlice';
import {getToken, getUserLogged, getValidatingSession} from '@state/session/selectors';

import Routes from './Routes';

const mapStateToProps = state => ({
  user: getUserLogged(state),
  validatingSession: getValidatingSession(state),
  token: getToken(state),
  appStatus: getAppStatus(state)
});

const mapDispatchToProps = dispatch => ({
  validateToken: payload => dispatch(validateSessionRequest(payload)),
  getAppStatus: () => dispatch(getAppStatusRequest())
});

const RoutesContainer = connect(mapStateToProps, mapDispatchToProps)(Routes);

export default RoutesContainer;
