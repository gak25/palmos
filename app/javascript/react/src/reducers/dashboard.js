import {
	SET_DASHBOARD_CURRENT_TAB_OVERVIEW,
	SET_DASHBOARD_CURRENT_TAB_ANALYTICS,
	SET_DASHBOARD_CURRENT_TAB_DATA,
	SET_DASHBOARD_CURRENT_TAB_ALERTS,
	SET_DASHBOARD_CURRENT_TAB_ACCOUNT,
	SET_DASHBOARD_CURRENT_TAB_HARDWARE,
	SET_DASHBOARD_STATUS_VIEW,
	TOGGLE_DASHBOARD_STATUS_VISIBILITY,
	TOGGLE_REGION_SELECT_VISIBILITY,
	SET_LOADING
} from '../actions/dashboard';

var initialState = {
	dashboardCurrentTab: 'MAP OVERVIEW',
	dashboardStatusView: 'ALL REGIONS',
	dashboardStatusVisibility: true,
	loading: false
};

const dashboard = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return Object.assign({}, state, {
				loading: action.bool
			});
		case SET_DASHBOARD_CURRENT_TAB_OVERVIEW:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'MAP OVERVIEW',
				statusDisplayToggleIcon: false
			});
		case SET_DASHBOARD_CURRENT_TAB_ANALYTICS:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'ANALYTICS',
				statusDisplayToggleIcon: true
			});
		case SET_DASHBOARD_CURRENT_TAB_DATA:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'DATA',
				statusDisplayToggleIcon: true
			});
		case SET_DASHBOARD_CURRENT_TAB_ALERTS:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'ALERTS',
				statusDisplayToggleIcon: true
			});
		case SET_DASHBOARD_CURRENT_TAB_ACCOUNT:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'ACCOUNT',
				statusDisplayToggleIcon: true
			});
		case SET_DASHBOARD_CURRENT_TAB_HARDWARE:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'HARDWARE',
				statusDisplayToggleIcon: true
			});
		case SET_DASHBOARD_STATUS_VIEW:
			return Object.assign({}, state, {
				dashboardStatusView: action.view
			});
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

export default dashboard;
