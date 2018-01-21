import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker } from 'react-google-maps';
import DashboardFilter from './DashboardViews/DashboardFilter';
import DashboardHeader from './DashboardHeader';
import DashboardMap from './DashboardViews/DashboardMap';
import DashboardAnalytics from './DashboardViews/DashboardAnalytics';
import DashboardData from './DashboardViews/DashboardData';
import DashboardAlerts from './DashboardViews/DashboardAlerts';
import DashboardAccount from './DashboardViews/DashboardAccount';
import DashboardHardware from './DashboardViews/DashboardHardware';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.item,
		componentVisibility: state.componentVisibility,
		dashboardView: state.dashboardView
	};
}

@connect(mapStateToProps)
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: {},
			userRegions: [],
			selectedRegion: {},
			selectedSensor: [],
			bounds: {},
			position: {},
			sensors: [],
			regionSelectDropdown: false
		};
		this.handleMapFilter = this.handleMapFilter.bind(this);
		this.fetchUserRegions = this.fetchUserRegions.bind(this);
		this.handleRegionDropdown = this.handleRegionDropdown.bind(this);
		this.handleRegionSelect = this.handleRegionSelect.bind(this);
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
		this.setRegion = this.setRegion.bind(this);
		this.handleFilterReset = this.handleFilterReset.bind(this);
	}
	fetchUserRegions(currentUser) {
		fetch(`/api/v1/users/${currentUser.handle}/regions`)
			.then(response => response.json())
			.then(data => {
				if (data.length > 1) {
					var activeRegion = data.pop();
					this.setState({
						selectedRegion: activeRegion.active_region,
						userRegions: data
					});
					this.setRegion(activeRegion.active_region.id);
				}
			});
	}

	handleMapFilter(input) {
		// console.log(input.target.value);
	}

	handleRegionDropdown(event) {
		event.preventDefault();
		this.setState({ regionSelectDropdown: !this.state.regionSelectDropdown });
	}

	handleRegionSelect(event) {
		event.preventDefault();
		var region_id = parseInt(event.target.id);
		fetch(
			`/api/v1/users/${this.state.currentUser.handle}/regions/${region_id}`,
			{
				credentials: 'same-origin',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ active: !this.state.selectedRegion.active })
			}
		);
		this.setRegion(region_id);
	}

	setRegion(region_id) {
		var bounds;
		if (region_id != -1) {
			let selectedRegion = this.state.userRegions.find(
				region => region.region.id === region_id
			);
			var position = {
				lat: selectedRegion.region.region_latitude,
				lng: selectedRegion.region.region_longitude
			};
			this.setState({
				selectedRegion: selectedRegion,
				sensors: selectedRegion.sensors,
				position: position
			});
		} else {
			var sensors = [];
			for (var i = 0; i < this.state.userRegions.length; i++) {
				sensors = sensors.concat(this.state.userRegions[i].sensors);
			}
			bounds = new google.maps.LatLngBounds();
			for (i = 0; i < sensors.length; i++) {
				bounds.extend({
					lat: sensors[i].sensor_latitude,
					lng: sensors[i].sensor_longitude
				});
			}
			this.setState({
				bounds: bounds,
				sensors: sensors,
				selectedRegion: {}
			});
		}
	}

	handleFilterReset(event) {
		this.setState({
			selectedRegion: {}
		});
	}

	handleMarkerClick(marker) {
		var selectedSensor = [marker];
		this.setState({ selectedSensor: selectedSensor });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser != this.props.currentUser) {
			this.fetchUserRegions(nextProps.currentUser);
			this.setState({ currentUser: nextProps.currentUser });
		}
	}

	render() {
		let view = null;
		if (this.props.dashboardView.dashboardCurrentTab === 'OVERVIEW') {
			view = (
				<DashboardMap
					currentUser={this.state.currentUser}
					selectedSensor={this.state.selectedSensor}
					selectedRegion={this.state.selectedRegion.region}
					onMarkerClick={this.handleMarkerClick}
					position={this.state.position}
					bounds={this.state.bounds}
					markers={this.state.sensors}
				/>
			);
		} else if (this.props.dashboardView.dashboardCurrentTab === 'ANALYTICS') {
			view = <DashboardAnalytics />;
		} else if (this.props.dashboardView.dashboardCurrentTab === 'DATA') {
			view = <DashboardData />;
		} else if (this.props.dashboardView.dashboardCurrentTab === 'ALERTS') {
			view = <DashboardAlerts />;
		} else if (this.props.dashboardView.dashboardCurrentTab === 'ACCOUNT') {
			view = <DashboardAccount />;
		} else if (this.props.dashboardView.dashboardCurrentTab === 'HARDWARE') {
			view = <DashboardHardware />;
		}

		return (
			<div className="dashboard">
				<DashboardFilter
					regions={this.state.userRegions}
					currentRegion={this.state.selectedRegion}
					sensors={this.state.sensors}
					handleMapFilter={this.handleMapFilter}
					handleRegionSelect={this.handleRegionSelect}
					handleRegionDropdown={this.handleRegionDropdown}
					handleFilterReset={this.handleFilterReset}
					regionSelectDropdown={this.state.regionSelectDropdown}
				/>
				<div className="dashboard-main-view">
					<DashboardHeader currentRegion={this.state.selectedRegion.region} />
					{view}
				</div>
			</div>
		);
	}
}

export default Dashboard;
