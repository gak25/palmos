import { SET_MAP_CURRENT_REGION } from '../actions/regions';

var initialRegionState = {
	currentRegion: null,
	allRegions: [
		{
			id: '101',
			region_nickname: "Artisan's Asylum",
			region_city: 'Somerville',
			region_state_code: 'MA',
			region_latitude: 40.82590937,
			region_longitude: 71.37393774
		},
		{
			id: '102',
			region_nickname: "Martha's Vineyard",
			region_city: "Martha's Vineyard",
			region_state_code: 'MA',
			region_latitude: 41.836794,
			region_longitude: 70.73580309
		}
	]
};

const currentRegion = (state = initialRegionState, action) => {
	switch (action.type) {
		case SET_MAP_CURRENT_REGION:
			var region = state.allRegions.find(
				region => region.id === action.region_id
			);
			return {
				...state,
				currentRegion: region
			};
		default:
			return state;
	}
};

export default currentRegion;
