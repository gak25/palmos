import {
	SET_DASHBOARD_CURRENT_TAB,
	SET_DASHBOARD_STATUS_VIEW,
	TOGGLE_ACCOUNT_DROPDOWN,
	TOGGLE_DASHBOARD_STATUS_VISIBILITY,
	SET_DASHBOARD_STATUS_VISIBILITY,
	SET_DASHBOARD_FILTER_VISIBILITY,
	TOGGLE_REGION_SELECT_VISIBILITY,
	SET_LOADING
} from '../actions/dashboard';

var initialState = {
	dashboardCurrentTab: 'OVERVIEW',
	dashboardStatusView: 'ALL REGIONS',
	dashboardMapHeaderVisibility: true,
	dashboardAccountDropdownVisibility: false,
	dashboardFilterVisibility: true,
	dashboardStatusVisibility: true,
	loading: false
};

const dashboard = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return Object.assign({}, state, {
				loading: action.bool
			});
		case SET_DASHBOARD_CURRENT_TAB:
			var dropdown =
				action.view == 'ACCOUNT' || action.view == 'HARDWARE' ? false : true;
			return Object.assign({}, state, {
				dashboardCurrentTab: action.view,
				dashboardAccountDropdownVisibility: false,
				dashboardStatusView: action.view == 'OVERVIEW' ? true : false,
				statusDisplayToggleIcon: action.view == 'OVERVIEW' ? false : true,
				dashboardFilterVisibility: dropdown,
				dashboardMapHeaderVisibility: dropdown
			});
		case SET_DASHBOARD_STATUS_VIEW:
			return Object.assign({}, state, {
				dashboardStatusView: action.view
			});
		case TOGGLE_ACCOUNT_DROPDOWN:
			return Object.assign({}, state, {
				dashboardAccountDropdownVisibility: !state.dashboardAccountDropdownVisibility
			});
		case TOGGLE_DASHBOARD_STATUS_VISIBILITY:
			return Object.assign({}, state, {
				dashboardStatusVisibility: !state.dashboardStatusVisibility
			});
		case SET_DASHBOARD_FILTER_VISIBILITY:
			return Object.assign({}, state, {
				dashboardFilterVisibility: action.bool
			});
		case SET_DASHBOARD_STATUS_VISIBILITY:
			return Object.assign({}, state, {
				dashboardStatusVisibility: action.bool
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
