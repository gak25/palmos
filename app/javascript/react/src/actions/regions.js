const SET_MAP_CURRENT_REGION = 'SET_MAP_CURRENT_REGION';

export { SET_MAP_CURRENT_REGION };

export function setCurrentRegion(region_id) {
	return {
		type: 'SET_MAP_CURRENT_REGION',
		region_id
	};
}
