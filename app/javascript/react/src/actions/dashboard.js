const SET_DASHBOARD_CURRENT_TAB = 'SET_DASHBOARD_CURRENT_TAB';
const SET_DASHBOARD_STATUS_VIEW = 'SET_DASHBOARD_STATUS_VIEW';
const TOGGLE_ACCOUNT_DROPDOWN = 'TOGGLE_ACCOUNT_DROPDOWN';

const TOGGLE_DASHBOARD_STATUS_VISIBILITY = 'TOGGLE_DASHBOARD_STATUS_VISIBILITY';
const SET_DASHBOARD_STATUS_VISIBILITY = 'SET_DASHBOARD_STATUS_VISIBILITY';
const SET_DASHBOARD_FILTER_VISIBILITY = 'SET_DASHBOARD_FILTER_VISIBILITY';
const TOGGLE_REGION_SELECT_VISIBILITY = 'TOGGLE_REGION_SELECT_VISIBILITY';

const SET_LOADING = 'SET_LOADING';

export {
	SET_DASHBOARD_CURRENT_TAB,
	SET_DASHBOARD_STATUS_VIEW,
	TOGGLE_ACCOUNT_DROPDOWN,
	TOGGLE_DASHBOARD_STATUS_VISIBILITY,
	SET_DASHBOARD_STATUS_VISIBILITY,
	SET_DASHBOARD_FILTER_VISIBILITY,
	TOGGLE_REGION_SELECT_VISIBILITY,
	SET_LOADING
};

export function setLoading(bool) {
	return {
		type: 'SET_LOADING',
		bool
	};
}

export function setDashboardView(view) {
	return {
		type: 'SET_DASHBOARD_CURRENT_TAB',
		view
	};
}

export function setDashboardStatusView(view) {
	return {
		type: 'SET_DASHBOARD_STATUS_VIEW',
		view
	};
}

export function toggleAccountDropdown() {
	return {
		type: 'TOGGLE_ACCOUNT_DROPDOWN'
	};
}

export function toggleDashboardStatusVisibility() {
	return {
		type: 'TOGGLE_DASHBOARD_STATUS_VISIBILITY'
	};
}

export function setDashboardStatusVisibility(bool) {
	return {
		type: 'SET_DASHBOARD_STATUS_VISIBILITY',
		bool
	};
}

export function setDashboardFilterVisibility(bool) {
	return {
		type: 'SET_DASHBOARD_FILTER_VISIBILITY',
		bool
	};
}

export function toggleRegionSelectVisibility() {
	return {
		type: 'TOGGLE_REGION_SELECT_VISIBILITY'
	};
}
