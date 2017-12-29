import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker } from 'react-google-maps';
import DashboardMap from '../components/DashboardMap';
import DashboardFilter from '../components/DashboardFilter';
import DashboardStatus from '../components/DashboardStatus';
import DashboardMapHeader from '../components/DashboardMapHeader';
import MyMapComponent from '../components/MyMapComponent';

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

	handleMarkerClick(event) {
		console.log('clicked');
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser != this.props.currentUser) {
			this.fetchUserRegions(nextProps.currentUser);
			this.setState({ currentUser: nextProps.currentUser });
		}
	}

	render() {
		var regionMarkers = [];
		if (Object.keys(this.state.selectedRegion).length === 0) {
			for (var i = 0; i < this.state.userRegions.length; i++) {
				regionMarkers = regionMarkers.concat(this.state.userRegions[i].sensors);
			}
		} else {
			var regionMarkers = this.state.selectedRegion.sensors;
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
						{/* <DashboardMap
							regionCenter={{ lat: 42.381511, lng: -71.105099 }}
							regionMarkers={regionMarkers}
						/> */}
						<div className="map">
							<MyMapComponent
								onMarkerClick={this.handleMarkerClick}
								position={{ lat: 42.381511, lng: -71.105099 }}
							/>
						</div>
						{/* <MyMapComponent
							onMarkerClick={this.handleMarkerClick}
							position={{ lat: -34.397, lng: 150.644 }}
						/> */}

						{/* <DashboardMap
							isMarkerShown
							googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
							loadingElement=<div style={{ height: `100%` }} />
							containerElement=<div style={{ height: `400px` }} />
							mapElement=<div style={{ height: `100%` }} />
						/> */}
						<DashboardStatus currentRegion={this.state.selectedRegion.region} />
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
