import {
	SET_DASHBOARD_CURRENT_TAB_OVERVIEW,
	SET_DASHBOARD_CURRENT_TAB_ANALYTICS,
	SET_DASHBOARD_CURRENT_TAB_DATA,
	SET_DASHBOARD_CURRENT_TAB_ALERTS,
	SET_DASHBOARD_CURRENT_TAB_ACCOUNT,
	SET_DASHBOARD_CURRENT_TAB_HARDWARE
} from '../actions/dashboardView';

var initialState = {
	dashboardCurrentTab: 'MAP OVERVIEW'
};

const dashboardView = (state = initialState, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};

export default dashboardView;
