import React, { Component } from 'react';
import Dashboard from './Dashboard';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.user
	};
}

@connect(mapStateToProps)
class App extends Component {
	render() {
		return <Dashboard />;
	}
}

export default App;
