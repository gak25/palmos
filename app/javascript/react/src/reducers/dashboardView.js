import {
	SET_DASHBOARD_CURRENT_TAB_OVERVIEW,
	SET_DASHBOARD_CURRENT_TAB_ANALYTICS,
	SET_DASHBOARD_CURRENT_TAB_DATA,
	SET_DASHBOARD_CURRENT_TAB_ALERTS,
	SET_DASHBOARD_CURRENT_TAB_ACCOUNT,
	SET_DASHBOARD_CURRENT_TAB_HARDWARE
} from '../actions/dashboardView';

const dashboardView = (state = [], action) => {
	switch (action.type) {
		case SET_DASHBOARD_CURRENT_TAB_OVERVIEW:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'OVERVIEW'
			});
		case SET_DASHBOARD_CURRENT_TAB_ANALYTICS:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'ANALYTICS'
			});
		case SET_DASHBOARD_CURRENT_TAB_DATA:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'DATA'
			});
		case SET_DASHBOARD_CURRENT_TAB_ALERTS:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'ALERTS'
			});
		case SET_DASHBOARD_CURRENT_TAB_ACCOUNT:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'ACCOUNT'
			});
		case SET_DASHBOARD_CURRENT_TAB_HARDWARE:
			return Object.assign({}, state, {
				dashboardCurrentTab: 'HARDWARE'
			});
		default:
			return state;
	}
};

export default dashboardView;
