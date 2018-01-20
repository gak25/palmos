import { TOGGLE_DASHBOARD_STATUS_VISIBILITY } from '../actions/componentVisibility';

const componentVisibility = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_DASHBOARD_STATUS_VISIBILITY:
			return Object.assign({}, state, {
				dashboardStatusVisibility: !state.dashboardStatusVisibility
			});
		default:
			return state;
	}
};

export default componentVisibility;
