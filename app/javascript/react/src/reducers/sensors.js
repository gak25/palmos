import {
	FETCH_SENSOR_DATA,
	FETCH_SENSOR_DATA_SUCCESS,
	FETCH_SENSOR_DATA_FAILURE,
	SET_CURRENT_SENSOR
} from '../actions/getSensorData';

let initialState = {
	sensors: null,
	total: null,
	currentSensor: null,
	loading: false
};

const sensors = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SENSOR_DATA:
			return Object.assign({}, state, { loading: true });
		case FETCH_SENSOR_DATA_SUCCESS:
			var updatedCurrentSensor = null;
			var total = action.sensors.length;
			if (state.currentSensor != null) {
				updatedCurrentSensor = action.sensors.find(
					sensor => sensor.id === state.currentSensor.id
				);
			}
			return Object.assign({}, state, {
				sensors: action.sensors,
				total: total,
				loading: false,
				currentSensor: updatedCurrentSensor
			});
		case SET_CURRENT_SENSOR:
			return Object.assign({}, state, { currentSensor: action.sensor });
		case FETCH_SENSOR_DATA_FAILURE:
			return Object.assign({}, state, {});
		case FETCH_SENSOR_DATA_FAILURE:
			return {
				...state,
				currentSensor: {
					...state.currentSensor,
					sensor_nickname: action.nickname
				}
			};
		default:
			return state;
	}
};

export default sensors;
