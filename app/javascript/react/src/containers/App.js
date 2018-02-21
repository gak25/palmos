import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSensorData } from '../actions/getSensorData';

import TimerMixin from 'react-timer-mixin';

import Dashboard from './DashboardViews/Dashboard';

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ getSensorData }, dispatch)
	};
}

@connect(mapDispatchToProps)
export class App extends Component {
	componentWillMount() {
		// this.props.actions.getSensorData();
	}
	componentDidMount() {
		// this.timer = setInterval(() => {
		// 	this.props.actions.getSensorData();
		// }, 5000);
	}

	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	render() {
		return <Dashboard />;
	}
}

export default App;
