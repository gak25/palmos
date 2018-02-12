import React, { Component } from 'react';
import { GoogleMap, Marker } from 'react-google-maps';
import { FoldingCube } from 'better-react-spinkit';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavTop from './NavTop';
import DashboardFilter from './DashboardFilter';
import DashboardHeader from './DashboardHeader';
import DashboardMap from './DashboardMap';
import DashboardAnalytics from './DashboardAnalytics';
import DashboardData from './DashboardData';
import DashboardAlerts from './DashboardAlerts';
import DashboardAccount from './DashboardAccount';
import DashboardHardware from './DashboardHardware';

function mapStateToProps(state) {
	return {
		currentUser: state.user,
		dashboard: state.dashboard
	};
}

@connect(mapStateToProps)
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.handleMapFilter = this.handleMapFilter.bind(this);
		this.handleRegionSelect = this.handleRegionSelect.bind(this);
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
		this.setRegion = this.setRegion.bind(this);
		this.handleFilterReset = this.handleFilterReset.bind(this);
	}

	handleMapFilter(input) {}

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

	handleFilterReset(event) {}

	handleMarkerClick(marker) {
		var selectedSensor = [marker];
	}

	render() {
		let view = null;
		if (this.props.dashboard.dashboardCurrentTab === 'MAP OVERVIEW') {
			view = <DashboardMap onMarkerClick={this.handleMarkerClick} />;
		} else if (this.props.dashboard.dashboardCurrentTab === 'ANALYTICS') {
			view = <DashboardAnalytics />;
		} else if (this.props.dashboard.dashboardCurrentTab === 'DATA') {
			view = <DashboardData />;
		} else if (this.props.dashboard.dashboardCurrentTab === 'ALERTS') {
			view = <DashboardAlerts />;
		} else if (this.props.dashboard.dashboardCurrentTab === 'ACCOUNT') {
			view = <DashboardAccount />;
		} else if (this.props.dashboard.dashboardCurrentTab === 'HARDWARE') {
			view = <DashboardHardware />;
		}

		return (
			<div>
				{this.props.dashboard.loading ? (
					<div id="loading-overlay">
						<FoldingCube size={100} id="loading-icon" color="#67d5c6" />
					</div>
				) : null}
				<NavTop />
				<div className="dashboard">
					<DashboardFilter />
					<div className="dashboard-main-view">
						<DashboardHeader />
						{view}
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
