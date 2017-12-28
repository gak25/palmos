import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMapHeader = props => {
	return (
		<div className="map-header">
			<div className="map-header-overview">
				<div className="map-nav-tab">
					<h4>MAP OVERVIEW</h4>
				</div>
				<div className="map-nav-tab">
					<h5>NORTH WEST</h5>
				</div>
				<div className="map-nav-tab" id="header-last-update">
					<h5>(since Fri Apr 23, 2017 to Tue Apr 29)</h5>
				</div>
			</div>
		</div>
	);
};

export default DashboardMapHeader;
