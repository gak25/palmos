import React, { Component } from 'react';

import { connect } from 'react-redux';

import DashboardStatusOverview from './DashboardStatusOverview';
import DashboardRegionStatus from './DashboardRegionStatus';
import DashboardSensorStatus from './DashboardSensorStatus';

function mapStateToProps(state) {
	return {
		dashboard: state.dashboard
	};
}

@connect(mapStateToProps)
class DashboardStatus extends Component {
	render() {
		var component = null;
		switch (this.props.dashboard.dashboardStatusView) {
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
