import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SensorMap from '../components/SensorMap';

class DashboardMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: {},
			markers: []
		};
		this.fetchUserSensors = this.fetchUserSensors.bind(this);
	}
	fetchUserSensors(currentUser) {
		console.log('about to fetch sensors');
		fetch(`/api/v1/users/${currentUser.handle}/sensors`)
			.then(response => response.json())
			.then(data => {
				console.log('data' + data);
				this.setState({ markers: data });
			});
	}

	componentWillReceiveProps(nextProps) {
		console.log('receiving new props');
		if (nextProps.currentUser != this.props.currentUser) {
			console.log('receiving new user');
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
