import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SensorActions from '../../../actions/getSensorData';

import NicknameContainer from '../../../forms/NicknameContainer';
import SensorGraph from './SensorGraph';
import AccelerationGraph from './AccelerationGraph';

function mapStateToProps(state) {
	return {
		currentUser: state.users.user,
		sensor: state.sensors.currentSensor
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(SensorActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
class DashboardSensorStatus extends Component {
	render() {
		return (
			<div>
				<div id="current-detail">
					<div id="current-detail-name">
						<div>Sensor ID: {this.props.sensor.id}</div>
						<NicknameContainer />
					</div>
					<h5 id="detail-lat-lng">
						{/* {truncateDecimals(this.props.sensor.sensor_latitude, 6)},{' '} */}
						{this.props.sensor.sensor_latitude}
						{'   '}
						{/* {truncateDecimals(this.props.sensor.sensor_longitude, 6)} */}
						{this.props.sensor.sensor_longitude}
					</h5>
					<div id="detail-altitude">
						Altitude:{' '}
						{truncateDecimals(this.props.sensor.sensor_altitude_meters, 2)}m
					</div>
					<hr id="sensor-section-divider" />
				</div>
				<div id="current-detail">
					<div id="detail-status">
						<h3>Status</h3>
						<div id="analyze">
							Analyze
							<i
								className="fa fa-chevron-right"
								style={{ marginLeft: '5px' }}
								aria-hidden="true"
							/>
						</div>
					</div>
					<div id="detail-status">
						<h4>Health</h4>
						<div id="data">{this.props.sensor.sensor_status.toUpperCase()}</div>
					</div>
					<div id="detail-status">
						<h4>Risk Level</h4>
						<div id="data">
							{truncateDecimals(this.props.sensor.sensor_risk_level_history, 0)}%
						</div>
						<SensorGraph
							sensor_risk_level_history={
								this.props.sensor.sensor_risk_level_history
							}
						/>
					</div>
					<div id="detail-status">
						<h4>Acceleration x (g) </h4>
						<div id="data">
							{truncateDecimals(this.props.sensor.sensor_acc_x, 2)}
						</div>
						<h4>Acceleration y (g) </h4>
						<div id="data">
							{truncateDecimals(this.props.sensor.sensor_acc_y, 2)}
						</div>
						<h4>Acceleration z (g) </h4>
						<div id="data">
							{truncateDecimals(this.props.sensor.sensor_acc_z, 2)}
						</div>
						{/* <AccelerationGraph
							acceleration_x={this.state.sensor.sensor_acceleration_x_mGal}
							acceleration_y={this.state.sensor.sensor_acceleration_y_mGal}
							acceleration_z={this.state.sensor.sensor_acceleration_z_mGal}
						/> */}
					</div>
					<div id="detail-status">
						<h4>Water Pressure (kPa) </h4>
						<div id="data">
							{truncateDecimals(this.props.sensor.sensor_water_pressure, 2)}
						</div>
						<SensorGraph
							sensor_water_pressure_kPa_history={
								this.props.sensor.sensor_water_pressure_history
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default DashboardSensorStatus;
