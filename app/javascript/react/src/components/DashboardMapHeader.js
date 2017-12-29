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
					{props.currentRegion ? (
						props.currentRegion.region_nickname ? (
							<h4>{props.currentRegion.region_nickname}</h4>
						) : (
							<h4>{props.currentRegion.region_city}</h4>
						)
					) : (
						<h5>All Regions</h5>
					)}
				</div>
				<div className="map-nav-tab" id="map-nav-detail">
					{props.currentRegion ? (
						<div>
							<h5>{props.currentRegion.region_city},</h5>
							<h5>{props.currentRegion.region_state_code}</h5>
						</div>
					) : null}
				</div>
				<div className="map-nav-tab" id="header-last-update">
					<h5>(since Fri Apr 23, 2017 to Tue Apr 29)</h5>
				</div>
			</div>
		</div>
	);
};

export default DashboardMapHeader;
