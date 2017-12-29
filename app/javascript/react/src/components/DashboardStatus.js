import React from 'react';
import { Link } from 'react-router-dom';
import DashboardRegionStatus from './DashboardRegionStatus';
import DashboardSensorStatus from './DashboardSensorStatus';

const DashboardStatus = props => {
	var status = null;
	if (Object.keys(props.selectedSensor).length === 1) {
		status = <DashboardSensorStatus sensor={props.selectedSensor} />;
	} else if (props.selectedRegion) {
		status = <DashboardRegionStatus region={props.selectedRegion} />;
	}

	return <div className="right-status">{status}</div>;
};

export default DashboardStatus;
