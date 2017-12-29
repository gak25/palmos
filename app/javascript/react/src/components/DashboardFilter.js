import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFilter = props => {
	let regionNames = props.regions.map(region => {
		var key = region.region.id;
		if (region.region.region_nickname) {
			return (
				<li key={key} id={key} onClick={props.handleRegionSelect}>
					{region.region.region_nickname}
				</li>
			);
		} else {
			return (
				<li key={key} id={key} onClick={props.handleRegionSelect}>
					{region.region.region_city}, {region.region.region_state_code}
				</li>
			);
		}
	});
	regionNames.unshift(
		<li
			key={Date.now + Math.random() * 100}
			id={-1}
			onClick={props.handleRegionSelect}
		>
			All Regions
		</li>
	);
	let dropdown = null;
	if (props.regionSelectDropdown) {
		dropdown = <ul id="map-filter-dropdown">{regionNames}</ul>;
	}
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
			<hr id="section-divider" />
			<div className="filter-category">
				<div id="filter-category-top" onClick={props.handleRegionDropdown}>
					<h5>REGIONS</h5>
					<h4>All Regions</h4>
				</div>
				{dropdown}
			</div>
			<hr id="section-divider" />
		</div>
	);
};

export default DashboardFilter;
