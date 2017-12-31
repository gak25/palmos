import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker } from 'react-google-maps';
import DashboardMap from '../components/DashboardMap';
import DashboardFilter from '../components/DashboardFilter';
import DashboardStatus from '../components/DashboardStatus';
import DashboardMapHeader from '../components/DashboardMapHeader';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: {},
			userRegions: [],
			selectedRegion: {},
			selectedSensor: [],
			bounds: {},
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
				var activeRegion = data.pop();
				this.setState({
					selectedRegion: activeRegion.active_region,
					userRegions: data
				});
				this.setRegion(activeRegion.active_region.id);
			});
	}

	handleMapFilter(input) {
		console.log(input.target.value);
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
		if (region_id != -1) {
			let selectedRegion = this.state.userRegions.find(
				region => region.region.id === region_id
			);
			this.setState({
				selectedRegion: selectedRegion,
				selectedSensor: []
			});
		} else {
			var sensors = [];
			for (var i = 0; i < this.state.userRegions.length; i++) {
				sensors = sensors.concat(this.state.userRegions[i].sensors);
			}
			var bounds = new google.maps.LatLngBounds();
			for (i = 0; i < sensors.length; i++) {
				bounds.extend({
					lat: sensors[i].sensor_latitude,
					lng: sensors[i].sensor_longitude
				});
			}
			this.setState({
				bounds: bounds,
				selectedRegion: {}
				// selectedSensor: sensors
			});
		}
	}

	handleFilterReset(event) {
		console.log('reset!');
		this.setState({
			selectedRegion: {}
			// selectedSensor: []
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
		var position;
		var bounds;
		var sensors;
		if (this.state.selectedRegion.region) {
			position = {
				lat: this.state.selectedRegion.region.region_latitude,
				lng: this.state.selectedRegion.region.region_longitude
			};
			bounds = this.state.bounds;
		} else {
			position = { lat: 42.0, lng: -71.0 };
			bounds = this.state.bounds;
		}
		if (this.state.selectedRegion.sensors === undefined) {
			sensors = this.state.selectedSensor;
		} else {
			sensors = this.state.selectedRegion.sensors;
		}
		return (
			<div className="dashboard">
				<DashboardFilter
					regions={this.state.userRegions}
					currentRegion={this.state.selectedRegion}
					sensors={sensors}
					handleMapFilter={this.handleMapFilter}
					handleRegionSelect={this.handleRegionSelect}
					handleRegionDropdown={this.handleRegionDropdown}
					handleFilterReset={this.handleFilterReset}
					regionSelectDropdown={this.state.regionSelectDropdown}
				/>
				<div className="map-container">
					<DashboardMapHeader
						currentRegion={this.state.selectedRegion.region}
					/>
					<div className="map-subcontainer">
						<div className="map">
							<DashboardMap
								onMarkerClick={this.handleMarkerClick}
								position={position}
								markers={sensors}
								bounds={bounds}
							/>
						</div>
						<DashboardStatus
							currentUser={this.state.currentUser}
							selectedSensor={this.state.selectedSensor}
							selectedRegion={this.state.selectedRegion.region}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
