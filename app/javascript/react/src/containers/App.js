import React, { Component } from 'react';
import Dashboard from './DashboardViews/Dashboard';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

@connect(mapStateToProps)
export class App extends Component {
	render() {
		return <Dashboard />;
	}
}

export default App;
