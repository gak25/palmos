import humps from 'humps';

import baseUrl from '../constants/baseUrl';

import { setLoading } from './dashboard';

const FETCH_SENSOR_DATA_SUCCESS = 'FETCH_SENSOR_DATA_SUCCESS';
const FETCH_SENSOR_DATA_FAILURE = 'FETCH_SENSOR_DATA_FAILURE';
const SET_CURRENT_SENSOR = 'SET_CURRENT_SENSOR';

export {
	FETCH_SENSOR_DATA_SUCCESS,
	FETCH_SENSOR_DATA_FAILURE,
	SET_CURRENT_SENSOR
};

let setCurrentSensor = sensor => {
	return {
		type: SET_CURRENT_SENSOR,
		sensor
	};
};

let fetchUpdateSensorSuccess = sensors => {
	return {
		type: FETCH_SENSOR_DATA_SUCCESS,
		sensors
	};
};

let fetchUpdateSensorFailure = () => {
	return {
		type: FETCH_SENSOR_DATA_FAILURE
	};
};

let fetchSensorData = values => dispatch => {
	return fetch(`${baseUrl}/api/v1/users/sensors`, {
		credentials: 'same-origin',
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			dispatch(fetchUpdateSensorSuccess(data));
			return data;
		})
		.catch(errors => {
			dispatch(fetchUpdateSensorFailure());
			throw errors;
		});
};

export {
	fetchSensorData,
	fetchUpdateSensorSuccess,
	fetchUpdateSensorFailure,
	setCurrentSensor
};
