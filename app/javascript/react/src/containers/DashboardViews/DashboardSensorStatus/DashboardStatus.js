import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardRegionStatus from './DashboardRegionStatus';
import DashboardSensorStatus from './DashboardSensorStatus';

import * as DashboardVisibilityActions from '../../../actions/componentVisibility';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.item,
		componentVisibility: state.componentVisibility
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(DashboardVisibilityActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
class DashboardStatus extends Component {
	render() {
		var status = null;
		if (Object.keys(this.props.selectedSensor).length === 1) {
			status = (
				<DashboardSensorStatus
					currentUser={this.props.currentUser}
					sensor={this.props.selectedSensor}
					handleNicknameInput={this.props.handleNicknameInput}
				/>
			);
		} else if (this.props.selectedRegion) {
			status = (
				<DashboardRegionStatus
					currentUser={this.props.currentUser}
					region={this.props.selectedRegion}
					handleNicknameInput={this.props.handleNicknameInput}
				/>
			);
		}

		return (
			<div className="right-status">
				{status}
				<script src="/javascripts/Chart.bundle.min.js" />
			</div>
		);
	}
}

export default DashboardStatus;
