import {
	FETCH_CURRENT_USER,
	FETCH_CURRENT_USER_SUCCESS
} from '../actions/getCurrentUser';
import { FETCH_CREATE_SESSION_SUCCESS } from '../actions/createSession';

let initialState = {
	user: null
};

const users = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CURRENT_USER:
			return Object.assign({}, state, { loading: true });
		case FETCH_CURRENT_USER_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				user: action.currentUser
			});
		case FETCH_CREATE_SESSION_SUCCESS:
			return Object.assign({}, state, { user: action.currentUser });
		default:
			return state;
	}
};

export default users;
