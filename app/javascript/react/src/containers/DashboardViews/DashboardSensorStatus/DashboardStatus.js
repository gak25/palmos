import React, { Component } from 'react';

import DashboardStatusOverview from './DashboardStatusOverview';
import DashboardRegionStatus from './DashboardRegionStatus';
import DashboardSensorStatus from './DashboardSensorStatus';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		dashboardView: state.dashboardView
	};
}

@connect(mapStateToProps)
class DashboardStatus extends Component {
	render() {
		var component = null;
		switch (this.props.dashboardView.dashboardStatusView) {
			case 'ALL REGIONS':
				component = <DashboardStatusOverview />;
				break;
			case 'REGION':
				component = <DashboardRegionStatus />;
				break;
			case 'SENSOR':
				component = <DashboardSensorStatus />;
				break;
			default:
				component = <DashboardStatusOverview />;
				break;
		}

		return (
			<div className="right-status">
				{component}
				<script src="/javascripts/Chart.bundle.min.js" />
			</div>
		);
	}
}

export default DashboardStatus;
