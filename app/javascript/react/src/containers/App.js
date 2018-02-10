import React, { Component } from 'react';
import Dashboard from './DashboardViews/Dashboard';
import * as SensorActions from '../actions/fetchSensorData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimerMixin from 'react-timer-mixin';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(SensorActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends Component {
	componentDidMount() {
		// this.timer = setInterval(() => {
		this.props.actions.fetchSensorData();
		// }, 3000);
	}

	componentWillUnmount() {
		// clearTimeout(this.timer);
	}

	render() {
		return <Dashboard />;
	}
}

export default App;
