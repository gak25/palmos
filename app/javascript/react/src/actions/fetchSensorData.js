import humps from 'humps';

import baseUrl from '../constants/baseUrl';

const FETCH_SENSOR_DATA = 'FETCH_SENSOR_DATA';
const FETCH_SENSOR_DATA_SUCCESS = 'FETCH_SENSOR_DATA_SUCCESS';
const FETCH_SENSOR_DATA_FAILURE = 'FETCH_SENSOR_DATA_FAILURE';

export {
	FETCH_SENSOR_DATA,
	FETCH_SENSOR_DATA_SUCCESS,
	FETCH_SENSOR_DATA_FAILURE
};

let fetchUpdateSensor = () => {
	return {
		type: FETCH_SENSOR_DATA
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
	dispatch(fetchUpdateSensor());
	return fetch(`${baseUrl}/api/v1/users/sensors`)
		.then(response => {
			debugger;
			return response.json();
		})
		.then(data => {
			// if (data.error) {
			// 	throw data.error;
			// } else {
			// 	dispatch(fetchUpdateSensorSuccess());
			// }
			return data;
		});
	// .catch(errors => {
	// 	dispatch(fetchUpdateSensorFailure());
	// 	throw errors;
	// });
};

export {
	fetchSensorData,
	fetchUpdateSensor,
	fetchUpdateSensorSuccess,
	fetchUpdateSensorFailure
};
