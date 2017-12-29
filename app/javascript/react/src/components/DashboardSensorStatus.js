import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSensorStatus = props => {
	var sensor = props.sensor[0];
	return (
		<div>
			<div id="current-detail">
				<h3>Sensor ID: {sensor.id}</h3>
				{sensor.sensor_nickname ? (
					<div id="detail-nickname">{sensor.sensor_nickname}</div>
				) : null}
				<h5 id="detail-lat-lng">
					{truncateDecimals(sensor.sensor_latitude, 6)},{' '}
					{truncateDecimals(sensor.sensor_latitude, 6)}
				</h5>
				<div id="detail-altitude">
					Altitude
					<div id="detail-data">
						{truncateDecimals(sensor.sensor_altitude_meters, 2)}m
					</div>
				</div>
				<hr id="section-divider" />
			</div>
			{/* <div id="current-detail">
				<h3>Sensor ID: {sensor.id}</h3>
				<h5 id="detail-lat-lng">
					<div id="detail-data">
						{truncateDecimals(sensor.sensor_latitude, 6)},{' '}
						{truncateDecimals(sensor.sensor_longitude, 6)}
					</div>
				</h5>
				<h5 id="detail-lat-lng">
					<div id="detail-altitude">Altitude</div>
					<div id="detail-data">
						{truncateDecimals(sensor.sensor_altitude_meters, 2)}m
					</div>
				</h5>
			</div> */}
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
					<h4>Risk Level</h4>
					<div id="data">{truncateDecimals(sensor.sensor_risk_level, 0)}%</div>
				</div>
				<div id="detail-status">
					<h4>Health</h4>
					<div id="data">{sensor.sensor_status.toUpperCase()}</div>
				</div>
				<div id="detail-status">
					<h4>Acceleration x-axis</h4>
					<div id="data">
						{truncateDecimals(sensor.sensor_acceleration_x_mGal, 2)}g
					</div>
					<h4>Acceleration y-axis</h4>
					<div id="data">
						{truncateDecimals(sensor.sensor_acceleration_y_mGal, 2)}g
					</div>
					<h4>Acceleration z-axis</h4>
					<div id="data">
						{truncateDecimals(sensor.sensor_acceleration_z_mGal, 2)}g
					</div>
				</div>
				<div id="detail-status">
					<h4>Water Pressure</h4>
					<div id="data">
						{truncateDecimals(sensor.sensor_water_pressure_kPa, 2)}kPa
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardSensorStatus;
