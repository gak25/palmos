import {
	FETCH_SENSOR_DATA_SUCCESS,
	FETCH_SENSOR_DATA_FAILURE
} from '../actions/fetchSensorData';

let initialState = {
	sensors: null,
	currentSensor: null
};

const sensors = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SENSOR_DATA_SUCCESS:
			return Object.assign({}, state, {
				sensors: action.sensors
			});
		case FETCH_SENSOR_DATA_FAILURE:
			return Object.assign({}, state, {});
		default:
			return state;
	}
};

export default sensors;
