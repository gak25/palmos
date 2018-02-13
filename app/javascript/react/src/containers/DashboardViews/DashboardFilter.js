import React, { Component } from 'react';

import * as MapFilterActions from '../../actions/regions';
import * as DashboardViewActions from '../../actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.user,
		currentRegion: state.regions.currentRegion,
		sensors: state.sensors,
		regions: state.regions.regions,
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
		super(props);
		this.handleRegionSelect = this.handleRegionSelect.bind(this);
		this.handleFilterReset = this.handleFilterReset.bind(this);
		this.handleMapFilter = this.handleMapFilter.bind(this);
	}
	handleRegionSelect(event) {
		this.props.actions.setCurrentRegion(event.target.id);
		if (event.target.id) {
			this.props.actions.setDashboardStatusView('REGION');
		} else {
			this.props.actions.setDashboardStatusView('ALL REGIONS');
		}
	}

	handleFilterReset(event) {
		console.log('resetting filter');
	}
	handleMapFilter(event) {
		console.log('filter input: ' + event);
	}

	buildRegionMenu() {
		const regionNames = this.props.regions.map(region => {
			return (
				<li key={region.id} id={region.id} onClick={this.handleRegionSelect}>
					{region.region_nickname}
				</li>
			);
		});
		regionNames.unshift(
			<li
				key={Date.now + Math.random() * 100}
				id={null}
				onClick={this.handleRegionSelect}
			>
				All Regions
			</li>
		);
		return regionNames;
	}

	render() {
		return (
			<div className="left-filter">
				<div id="filter-title">FILTERS</div>
				{this.props.sensors ? (
					<div id="filter-status">
						<div id="current-sensor-count">{this.props.sensors.length} / </div>
						<div id="total-sensor-count">{this.props.sensors.total}</div>
					</div>
				) : null}
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
					<div
						id="filter-category-top"
						onClick={() => this.props.actions.toggleRegionSelectVisibility()}
					>
						<h5>REGIONS</h5>
						<h4>
							{this.props.regions.currentRegion
								? this.props.regions.currentRegion.region_nickname
								: 'All Regions'}
						</h4>
					</div>
					{this.props.dashboard.regionSelectVisibility ? (
						<ul id="map-filter-dropdown">{this.buildRegionMenu()}</ul>
					) : null}
				</div>
				<hr id="filter-section-divider" />
			</div>
		);
	}
}

export default DashboardFilter;
