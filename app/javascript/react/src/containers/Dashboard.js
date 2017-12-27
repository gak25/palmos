import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker } from 'react-google-maps';
import DashboardMap from './DashboardMap';
import DashboardFilter from '../components/DashboardFilter';
import DashboardStatus from '../components/DashboardStatus';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleMapFilter = this.handleMapFilter.bind(this);
	}

	handleMapFilter(input) {
		console.log(input.target.value);
	}

	render() {
		return (
			<div className="dashboard">
				<DashboardFilter handleMapFilter={this.handleMapFilter} />
				<div className="map-container">
					<div className="map-header">
						<div className="header-overview">
							<h4>MAP OVERVIEW</h4>
							<h5>NORTH WEST</h5>
						</div>
					</div>
					<div className="map-subcontainer">
						<DashboardMap />
						<DashboardStatus />
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
