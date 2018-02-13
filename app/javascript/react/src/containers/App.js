import React, { Component } from 'react';
import Dashboard from './DashboardViews/Dashboard';
import { getSensorData } from '../actions/getSensorData';
import { getCurrentUser } from '../actions/getCurrentUser';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimerMixin from 'react-timer-mixin';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ getSensorData, getCurrentUser }, dispatch)
	};
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends Component {
	componentWillMount() {
		this.props.actions.getSensorData();
		this.props.actions.getCurrentUser();
	}
	componentDidMount() {
		this.timer = setInterval(() => {
			this.props.actions.getSensorData();
		}, 5000);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	render() {
		return <Dashboard />;
	}
}

export default App;
