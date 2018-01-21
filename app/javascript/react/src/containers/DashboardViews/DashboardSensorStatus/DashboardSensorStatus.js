import React, { Component } from 'react';
import NicknameForm from '../../Forms/NicknameForm';
import SensorGraph from './SensorGraph';
import AccelerationGraph from './AccelerationGraph';

class DashboardSensorStatus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sensor: {}
		};
		this.handleNicknameInput = this.handleNicknameInput.bind(this);
	}

	handleNicknameInput(nickname) {
		fetch(
			`/api/v1/users/${this.props.currentUser.handle}/sensors/${
				this.state.sensor.id
			}`,
			{
				credentials: 'same-origin',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ nickname: nickname })
			}
		)
			.then(response => response.json())
			.then(response => {
				let sensor = this.state.sensor;
				sensor.sensor_nickname = response.sensor_nickname;
				this.setState({ sensor: sensor });
			});
	}

	componentWillMount() {
		this.setState({ sensor: this.props.sensor[0] });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.sensor != this.props.sensor) {
			this.setState({ sensor: nextProps.sensor[0] });
		}
	}

	render() {
		return (
			<div>
				<div id="current-detail">
					<div id="current-detail-name">
						<div>Sensor ID: {this.state.sensor.id}</div>
						<NicknameForm
							changeNickname={this.handleNicknameInput}
							nickname={this.state.sensor.sensor_nickname}
						/>
					</div>
					<h5 id="detail-lat-lng">
						{truncateDecimals(this.state.sensor.sensor_latitude, 6)},{' '}
						{truncateDecimals(this.state.sensor.sensor_longitude, 6)}
					</h5>
					<div id="detail-altitude">
						Altitude:{' '}
						{truncateDecimals(this.state.sensor.sensor_altitude_meters, 2)}m
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
						<div id="data">{this.state.sensor.sensor_status.toUpperCase()}</div>
					</div>
					<div id="detail-status">
						<h4>Risk Level</h4>
						<div id="data">
							{truncateDecimals(this.state.sensor.sensor_risk_level, 0)}%
						</div>
						<SensorGraph
							sensor_risk_level_history={
								this.state.sensor.sensor_risk_level_history
							}
						/>
					</div>
					<div id="detail-status">
						<h4>Acceleration x (g) </h4>
						<div id="data">
							{truncateDecimals(
								this.state.sensor.sensor_acceleration_x_mGal,
								2
							)}
						</div>
						<h4>Acceleration y (g) </h4>
						<div id="data">
							{truncateDecimals(
								this.state.sensor.sensor_acceleration_y_mGal,
								2
							)}
						</div>
						<h4>Acceleration z (g) </h4>
						<div id="data">
							{truncateDecimals(
								this.state.sensor.sensor_acceleration_z_mGal,
								2
							)}
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
							{truncateDecimals(this.state.sensor.sensor_water_pressure_kPa, 2)}
						</div>
						<SensorGraph
							sensor_water_pressure_kPa_history={
								this.state.sensor.sensor_water_pressure_kPa_history
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default DashboardSensorStatus;
