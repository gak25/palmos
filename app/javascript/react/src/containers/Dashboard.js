import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker } from 'react-google-maps';
import DashboardMap from '../components/DashboardMap';
import DashboardFilter from '../components/DashboardFilter';
import DashboardStatus from '../components/DashboardStatus';
import DashboardMapHeader from '../components/DashboardMapHeader';
// import MyMapComponent from '../components/MyMapComponent';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: {},
			userRegions: [],
			selectedRegion: {},
			regionSelectDropdown: false
		};
		this.handleMapFilter = this.handleMapFilter.bind(this);
		this.fetchUserRegions = this.fetchUserRegions.bind(this);
		this.handleRegionDropdown = this.handleRegionDropdown.bind(this);
		this.handleRegionSelect = this.handleRegionSelect.bind(this);
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
	}
	fetchUserRegions(currentUser) {
		fetch(`/api/v1/users/${currentUser.handle}/regions`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					userRegions: data
				});
				return data;
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
		if (region_id != -1) {
			let selectedRegion = this.state.userRegions.find(
				region => region.region.id === region_id
			);
			this.setState({ selectedRegion: selectedRegion });
		} else {
			this.setState({ selectedRegion: {} });
		}
	}

	handleMarkerClick(marker) {
		console.log('marker_parent: ' + marker);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser != this.props.currentUser) {
			this.fetchUserRegions(nextProps.currentUser);
			this.setState({ currentUser: nextProps.currentUser });
		}
	}

	render() {
		var sensors = [];
		var position = { lat: 42.381511, lng: -71.105099 };
		if (Object.keys(this.state.selectedRegion).length === 0) {
			position = { lat: 42.381511, lng: -71.105099 };
			for (var i = 0; i < this.state.userRegions.length; i++) {
				sensors = sensors.concat(this.state.userRegions[i].sensors);
			}
		} else {
			position = {
				lat: this.state.selectedRegion.region.region_latitude,
				lng: this.state.selectedRegion.region.region_longitude
			};
			sensors = this.state.selectedRegion.sensors;
		}
		return (
			<div className="dashboard">
				<DashboardFilter
					regions={this.state.userRegions}
					handleMapFilter={this.handleMapFilter}
					handleRegionSelect={this.handleRegionSelect}
					handleRegionDropdown={this.handleRegionDropdown}
					regionSelectDropdown={this.state.regionSelectDropdown}
				/>
				<div className="map-container">
					<DashboardMapHeader
						currentRegion={this.state.selectedRegion.region}
					/>
					<div className="map-subcontainer">
						<div className="map">
							<DashboardMap
								// onMarkerClick={this.handleMarkerClick}
								position={position}
								sensors={sensors}
							/>
						</div>
						<DashboardStatus currentRegion={this.state.selectedRegion.region} />
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
