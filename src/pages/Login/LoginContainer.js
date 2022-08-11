import {connect} from 'react-redux';

import {loginRequest} from '@state/session/sessionSlice';
import {hasError, isLoggingIn} from '@state/session/selectors';

import Login from './Login';

const mapStateToProps = props => ({
  hasError: hasError(props),
  isLoggingIn: isLoggingIn(props)
});

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(loginRequest(payload))
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
