import {connect} from 'react-redux';
import {push} from 'redux-first-history';

import {routes} from '@constants';

import Home from './Home';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(push(routes.LOGIN))
});

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;
