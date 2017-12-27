import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMapHeader = props => {
	return (
		<div className="map-header">
			<div className="header-overview">
				<h4>MAP OVERVIEW</h4>
				<h5>NORTH WEST</h5>
				<div id="header-last-update">
					(since Fri Apr 23, 2017 to Tue Apr 29)
				</div>
			</div>
		</div>
	);
};

export default DashboardMapHeader;
