import {
	FETCH_SENSOR_DATA,
	FETCH_SENSOR_DATA_SUCCESS
} from '../actions/fetchSensorData';

let initialState = {
	fetchingSensorData: false,
	sensors: null
};

const fetchSensorData = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SENSOR_DATA:
			return Object.assign({}, state, { fetchingSensorData: true });
		case FETCH_SENSOR_DATA_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				sensors: action.sensors
			});
		default:
			return state;
	}
};

export default fetchSensorData;
