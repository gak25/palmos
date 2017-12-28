import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker } from 'react-google-maps';
import DashboardMap from './DashboardMap';
import DashboardFilter from '../components/DashboardFilter';
import DashboardStatus from '../components/DashboardStatus';
import DashboardMapHeader from '../components/DashboardMapHeader';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: {}
		};
		this.handleMapFilter = this.handleMapFilter.bind(this);
	}

	handleMapFilter(input) {
		console.log(input.target.value);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser != this.props.currentUser) {
			this.setState({ currentUser: nextProps.currentUser });
		}
	}

	render() {
		return (
			<div className="dashboard">
				<DashboardFilter handleMapFilter={this.handleMapFilter} />
				<div className="map-container">
					<DashboardMapHeader />
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
