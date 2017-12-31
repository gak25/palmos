import React from 'react';
import { Link } from 'react-router-dom';
import DashboardRegionStatus from '../containers/DashboardRegionStatus';
import DashboardSensorStatus from '../containers/DashboardSensorStatus';

const DashboardStatus = props => {
	var status = null;

	if (Object.keys(props.selectedSensor).length === 1) {
		status = (
			<DashboardSensorStatus
				currentUser={props.currentUser}
				sensor={props.selectedSensor}
				handleNicknameInput={props.handleNicknameInput}
			/>
		);
	} else if (props.selectedRegion) {
		status = (
			<DashboardRegionStatus
				currentUser={props.currentUser}
				region={props.selectedRegion}
				handleNicknameInput={props.handleNicknameInput}
			/>
		);
	}

	return (
		<div className="right-status">
			{status}
			<script src="/javascripts/Chart.bundle.min.js" />
		</div>
	);
};

export default DashboardStatus;
