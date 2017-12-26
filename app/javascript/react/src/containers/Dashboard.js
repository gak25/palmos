import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker } from 'react-google-maps';
import DashboardMap from './DashboardMap';

const Dashboard = props => {
	return (
		<div className="dashboard">
			<div className="info left-filter">map left filter</div>
			<div className="map-container">
				<div className="map-header">map header</div>
				<div className="map-subcontainer">
					<div className="map">map</div>
					<div className="info right-status">map right status</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
