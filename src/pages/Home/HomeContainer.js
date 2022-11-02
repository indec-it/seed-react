import {connect} from 'react-redux';

import {logoutRequest} from '@state/session/sessionSlice';

import Home from './Home';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest())
});

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;
