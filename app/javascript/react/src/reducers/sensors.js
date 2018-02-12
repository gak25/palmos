import {
	FETCH_SENSOR_DATA_SUCCESS,
	FETCH_SENSOR_DATA_FAILURE,
	SET_CURRENT_SENSOR
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
		case SET_CURRENT_SENSOR:
			return Object.assign({}, state, { currentSensor: action.sensor });
		case FETCH_SENSOR_DATA_FAILURE:
			return Object.assign({}, state, {});
		default:
			return state;
	}
};

export default sensors;
