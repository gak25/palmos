import React, { Component } from 'react';

import * as MapFilterActions from '../../actions/regions';
import * as DashboardViewActions from '../../actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.user,
		currentRegion: state.regions.currentRegion,
		allRegions: state.regions.allRegions,
		dashboard: state.dashboard
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(
			{
				...MapFilterActions,
				...DashboardViewActions
			},
			dispatch
		)
	};
}

@connect(mapStateToProps, mapDispatchToProps)
class DashboardFilter extends Component {
	constructor(props) {
		super();
		this.handleRegionSelect = this.handleRegionSelect.bind(this);
		this.handleFilterReset = this.handleFilterReset.bind(this);
		this.handleRegionDropdown = this.handleRegionDropdown.bind(this);
		this.handleMapFilter = this.handleMapFilter.bind(this);
	}
	handleRegionSelect(event) {
		this.props.actions.setCurrentRegion(event.target.id);
		this.props.actions.setDashboardStatusView('REGION');
	}
	handleFilterReset(event) {
		console.log('resetting filter');
	}
	handleMapFilter(event) {
		console.log('filter input: ' + event);
	}
	handleRegionDropdown() {
		this.props.actions.toggleRegionSelectVisibility();
	}

	render() {
		var currentRegionTitle;
		if (this.props.currentRegion) {
			currentRegionTitle = this.props.currentRegion.region_nickname;
		} else {
			currentRegionTitle = 'All Regions';
		}

		let regionNames = this.props.allRegions.map(region => {
			return (
				<li key={region.id} id={region.id} onClick={this.handleRegionSelect}>
					{region.region_nickname}
				</li>
			);
		});
		regionNames.unshift(
			<li
				key={Date.now + Math.random() * 100}
				id={-1}
				onClick={this.handleRegionSelect}
			>
				All Regions
			</li>
		);
		return (
			<div className="left-filter">
				<div id="filter-title">FILTERS</div>
				<div id="filter-status">
					{/* <div id="current-sensor-count">{this.props.sensors.length}</div> */}
					<div id="total-sensor-count">/total</div>
				</div>
				<div onClick={this.handleFilterReset} id="filter-reset">
					RESET
				</div>
				<input
					id="map-filter"
					onChange={this.handleMapFilter}
					placeholder="Filter"
				/>
				<hr id="filter-section-divider" />
				<div className="filter-category">
					<div id="filter-category-top" onClick={this.handleRegionDropdown}>
						<h5>REGIONS</h5>
						<h4>{currentRegionTitle}</h4>
					</div>
					{this.props.dashboard.regionSelectVisibility ? (
						<ul id="map-filter-dropdown">{regionNames}</ul>
					) : null}
				</div>
				<hr id="filter-section-divider" />
			</div>
		);
	}
}

export default DashboardFilter;
