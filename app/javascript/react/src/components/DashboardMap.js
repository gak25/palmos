import React from 'react';
import { Link } from 'react-router-dom';
import SensorMap from './SensorMap';

const DashboardMap = props => {
	return (
		<div className="map">
			<SensorMap markers={props.regionMarkers} />
		</div>
	);
};

export default DashboardMap;
