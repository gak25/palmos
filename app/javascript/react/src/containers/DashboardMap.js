import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SensorMap from '../components/SensorMap';

class DashboardMap extends Component {
	constructor(props) {
		super(props);
		this.state = { currentUser: {}, markers: [] };
		this.fetchUserSensors = this.fetchUserSensors.bind(this);
	}
	fetchUserSensors(currentUser) {
		fetch(`/api/v1/users/${currentUser.handle}/sensors`)
			.then(response => response.json())
			.then(data => {
				this.setState({ markers: data });
			});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser != this.props.currentUser) {
			this.fetchUserSensors(nextProps.currentUser);
			this.setState({ currentUser: nextProps.currentUser });
		}
	}

	render() {
		return (
			<div className="map">
				<SensorMap markers={this.state.markers} />
			</div>
		);
	}
}

export default DashboardMap;
