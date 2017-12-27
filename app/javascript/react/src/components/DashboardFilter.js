import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFilter = props => {
	return (
		<div className="left-filter">
			<div id="filter-title">FILTERS</div>
			<div id="filter-status">
				<div id="current-sensor-count">100</div>
				<div id="total-sensor-count">/1873</div>
			</div>
			<div id="filter-reset">RESET</div>
			<input
				id="map-filter"
				onChange={props.handleMapFilter}
				placeholder="Filter"
			/>
			<hr id="filter-section-divider" />
		</div>
	);
};

export default DashboardFilter;
