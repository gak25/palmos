import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardFilter extends Component {
	render() {
		var currentRegion;
		if (this.props.currentRegion.region) {
			if (this.props.currentRegion.region.region_nickname) {
				currentRegion = this.props.currentRegion.region.region_nickname;
			} else {
				currentRegion =
					this.props.currentRegion.region.region_city +
					', ' +
					this.props.currentRegion.region.region_state_code;
			}
		} else {
			currentRegion = 'All Regions';
		}
		let regionNames = this.props.regions.map(region => {
			var key = region.region.id;
			if (region.region.region_nickname) {
				return (
					<li key={key} id={key} onClick={this.props.handleRegionSelect}>
						{region.region.region_nickname}
					</li>
				);
			} else {
				return (
					<li key={key} id={key} onClick={this.props.handleRegionSelect}>
						{region.region.region_city}, {region.region.region_state_code}
					</li>
				);
			}
		});
		regionNames.unshift(
			<li
				key={Date.now + Math.random() * 100}
				id={-1}
				onClick={this.props.handleRegionSelect}
			>
				All Regions
			</li>
		);
		let dropdown = null;
		if (this.props.regionSelectDropdown) {
			dropdown = <ul id="map-filter-dropdown">{regionNames}</ul>;
		}
		return (
			<div className="left-filter">
				<div id="filter-title">FILTERS</div>
				<div id="filter-status">
					<div id="current-sensor-count">{this.props.sensors.length}</div>
					<div id="total-sensor-count">/total</div>
				</div>
				<div onClick={this.props.handleFilterReset} id="filter-reset">
					RESET
				</div>
				<input
					id="map-filter"
					onChange={this.props.handleMapFilter}
					placeholder="Filter"
				/>
				<hr id="filter-section-divider" />
				<div className="filter-category">
					<div
						id="filter-category-top"
						onClick={this.props.handleRegionDropdown}
					>
						<h5>REGIONS</h5>
						<h4>{currentRegion}</h4>
					</div>
					{dropdown}
				</div>
				<hr id="filter-section-divider" />
			</div>
		);
	}
}

export default DashboardFilter;
