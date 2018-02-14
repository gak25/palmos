import { SET_MAP_CURRENT_REGION } from '../actions/regions';

var initialState = {
	currentRegion: null,
	regions: [
		{
			id: '101',
			region_nickname: "Artisan's Asylum",
			region_city: 'Somerville',
			region_state_code: 'MA',
			region_latitude: '40.82590937N',
			region_longitude: '71.37393774W'
		},
		{
			id: '102',
			region_nickname: "Martha's Vineyard",
			region_city: "Martha's Vineyard",
			region_state_code: 'MA',
			region_latitude: '41.836794N',
			region_longitude: '70.73580309W'
		}
	]
};

const regions = (state = initialState, action) => {
	switch (action.type) {
		case SET_MAP_CURRENT_REGION:
			var region = null;
			if (action.region_id) {
				var region = state.regions.find(
					region => region.id === action.region_id
				);
			}
			return {
				...state,
				currentRegion: region
			};
		default:
			return state;
	}
};

export default regions;
