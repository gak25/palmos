import {
	TOGGLE_DASHBOARD_STATUS_VISIBILITY,
	TOGGLE_REGION_SELECT_VISIBILITY
} from '../actions/componentVisibility';

var initialState = {
	dashboardStatusVisibility: true
};

const componentVisibility = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_DASHBOARD_STATUS_VISIBILITY:
			return Object.assign({}, state, {
				dashboardStatusVisibility: !state.dashboardStatusVisibility
			});
		case TOGGLE_REGION_SELECT_VISIBILITY:
			return Object.assign({}, state, {
				regionSelectVisibility: !state.regionSelectVisibility
			});
		default:
			return state;
	}
};

export default componentVisibility;
