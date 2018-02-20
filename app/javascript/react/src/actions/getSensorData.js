import humps from 'humps';

import baseUrl from '../constants/baseUrl';

const FETCH_SENSOR_DATA = 'FETCH_SENSOR_DATA';
const FETCH_SENSOR_DATA_SUCCESS = 'FETCH_SENSOR_DATA_SUCCESS';
const FETCH_SENSOR_DATA_FAILURE = 'FETCH_SENSOR_DATA_FAILURE';
const SET_CURRENT_SENSOR = 'SET_CURRENT_SENSOR';
const SET_SENSOR_NICKNAME = 'SET_SENSOR_NICKNAME';

export {
	FETCH_SENSOR_DATA,
	FETCH_SENSOR_DATA_SUCCESS,
	FETCH_SENSOR_DATA_FAILURE,
	SET_CURRENT_SENSOR,
	SET_SENSOR_NICKNAME
};

let fetchSensorData = () => {
	return {
		type: FETCH_SENSOR_DATA
	};
};

let setCurrentSensor = sensor => {
	return {
		type: SET_CURRENT_SENSOR,
		sensor
	};
};

let setSensorNickname = nickname => dispatch => {
	return fetch(`${baseUrl}/api/v1/users/sensors`, {
		credentials: 'same-origin',
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: { sensor_nickname: nickname }
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			dispatch(setSensorNicknameSuccess(data));
			return data;
		})
		.catch(errors => {
			// dispatch(fetchUpdateSensorFailure());
			console.log('Failure to set sensor nickname!');
			throw errors;
		});
};

let setSensorNicknameSuccess = nickname => {
	return {
		type: SET_SENSOR_NICKNAME,
		nickname
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

let getSensorData = () => dispatch => {
	dispatch(fetchSensorData());
	return fetch(`${baseUrl}/api/v1/users/sensors.json`, {
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
	getSensorData,
	fetchUpdateSensorSuccess,
	fetchUpdateSensorFailure,
	setCurrentSensor,
	setSensorNickname,
	setSensorNicknameSuccess
};
