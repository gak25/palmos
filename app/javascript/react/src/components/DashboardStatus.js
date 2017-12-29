import React from 'react';
import { Link } from 'react-router-dom';

const DashboardStatus = props => {
	return (
		<div className="right-status">
			<div id="current-sensor">
				{props.currentRegion ? (
					props.currentRegion.region_nickname ? (
						<h5>{props.currentRegion.region_nickname}</h5>
					) : (
						<h5>{props.currentRegion.region_city}</h5>
					)
				) : (
					<h5>All Regions</h5>
				)}
			</div>
			<hr id="section-divider" />
		</div>
	);
};

export default DashboardStatus;
