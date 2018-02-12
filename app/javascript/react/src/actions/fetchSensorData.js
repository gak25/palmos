import humps from 'humps';

import baseUrl from '../constants/baseUrl';

import { setLoading } from './dashboard';

const FETCH_SENSOR_DATA_SUCCESS = 'FETCH_SENSOR_DATA_SUCCESS';
const FETCH_SENSOR_DATA_FAILURE = 'FETCH_SENSOR_DATA_FAILURE';

export { FETCH_SENSOR_DATA_SUCCESS, FETCH_SENSOR_DATA_FAILURE };

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

export { fetchSensorData, fetchUpdateSensorSuccess, fetchUpdateSensorFailure };
