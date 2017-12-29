import React from 'react';
import { Link } from 'react-router-dom';

const DashboardRegionStatus = props => {
	var region = props.region;
	return (
		<div>
			<div id="current-detail">
				<h3>Region ID: {region.id}</h3>
				{region.region_nickname ? (
					<div id="detail-nickname">{region.region_nickname}</div>
				) : null}
				<h4 id="detail-lat-lng">
					{region.region_city}, {region.region_state_code}
				</h4>
				<h5 id="detail-lat-lng">
					{region.region_latitude}, {region.region_longitude}
				</h5>
				<hr id="section-divider" />
			</div>
		</div>
	);
};

export default DashboardRegionStatus;
