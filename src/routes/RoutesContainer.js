import {connect} from 'react-redux';

import {validateSessionRequest} from '@state/session/sessionSlice';
import {getToken, getUserLogged, getValidatingSession} from '@state/session/selectors';

import Routes from './Routes';

const mapStateToProps = state => ({
  user: getUserLogged(state),
  validatingSession: getValidatingSession(state),
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  validateToken: payload => dispatch(validateSessionRequest(payload))
});

const RoutesContainer = connect(mapStateToProps, mapDispatchToProps)(Routes);

export default RoutesContainer;
