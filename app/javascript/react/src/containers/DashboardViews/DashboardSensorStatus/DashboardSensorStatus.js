import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SensorActions from '../../../actions/getSensorData';

import { Circle } from 'better-react-spinkit';

import NicknameContainer from '../../../forms/NicknameContainer';
import SensorGraph from './SensorGraph';
import AccelerationGraph from './AccelerationGraph';

function mapStateToProps(state) {
	return {
		currentUser: state.users.user,
		sensor: state.sensors.currentSensor,
		fetching: state.sensors.loading
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
						{this.props.fetching ? <Circle id="sensor-loading-icon" /> : null}
						<NicknameContainer />
					</div>
					<div className="sensor-top-detail">
						<i
							className="fa fa-map-marker"
							aria-hidden="true"
							style={{ marginRight: 8 }}
						/>
						{this.props.sensor.sensor_latitude}
					</div>
					<div className="sensor-top-detail">
						<i
							className="fa fa-map-marker"
							aria-hidden="true"
							style={{ marginRight: 8 }}
						/>
						{this.props.sensor.sensor_longitude}
					</div>
					<div className="sensor-top-detail">
						<i
							className="fa fa-caret-up"
							aria-hidden="true"
							style={{ marginRight: 8 }}
						/>
						{this.props.sensor.sensor_altitude_meters}m
					</div>
					<div className="sensor-top-detail">
						<div style={{ display: 'block', marginTop: 8 }}>
							Last connection:
						</div>
						{this.props.sensor.updated_at}
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
						<div
							id="data"
							style={getHealthColor(this.props.sensor.sensor_status)}
						>
							{this.props.sensor.sensor_status.toUpperCase()}
						</div>
					</div>
					<div id="detail-status">
						<h4>Risk Level</h4>
						<div
							id="data"
							style={getRiskColor(this.props.sensor.sensor_risk_level)}
						>
							{this.props.sensor.sensor_risk_level.toString()}%
						</div>
						<SensorGraph
							sensor_risk_level_history={
								this.props.sensor.sensor_risk_level_history
							}
						/>
					</div>
					<div id="detail-status">
						<h4>Acceleration x (g) </h4>
						<div id="data">{this.props.sensor.sensor_acc_x}</div>
						<h4>Acceleration y (g) </h4>
						<div id="data">{this.props.sensor.sensor_acc_y}</div>
						<h4>Acceleration z (g) </h4>
						<div id="data">{this.props.sensor.sensor_acc_z}</div>
						{/* <AccelerationGraph
							acceleration_x={this.props.sensor.sensor_acc_x}
							acceleration_y={this.props.sensor.sensor_acc_y}
							acceleration_z={this.props.sensor.sensor_acc_z}
						/> */}
					</div>
					<div id="detail-status">
						<h4>Speed </h4>
						<div id="data">{this.props.sensor.sensor_speed}kn</div>
					</div>
					<div id="detail-status">
						<h4>Angle </h4>
						<div id="data">{this.props.sensor.sensor_angle}°</div>
					</div>
					<div id="detail-status">
						<h4>Temperature </h4>
						<div id="data">{this.props.sensor.sensor_temp_celcius}°C</div>
					</div>
					<div id="detail-status">
						<h4>Humidity </h4>
						<div id="data">{this.props.sensor.sensor_humidity_percentage}%</div>
					</div>
					<div id="detail-status">
						<h4>Water Distance </h4>
						<div id="data">{this.props.sensor.sensor_distance}</div>
						<h4>Water Pressure (kPa) </h4>
						<div id="data">{this.props.sensor.sensor_water_pressure}</div>
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
