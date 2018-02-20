import {
	FETCH_CURRENT_USER,
	FETCH_CURRENT_USER_SUCCESS
} from '../actions/getCurrentUser';
import { FETCH_CREATE_SESSION_SUCCESS } from '../actions/createSession';
import {
	FETCH_CREATE_USER,
	FETCH_CREATE_USER_SUCCESS
} from '../actions/createUser';

let initialState = {
	currentUser: null
};

const users = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CURRENT_USER:
			return Object.assign({}, state, { loading: true });
		case FETCH_CURRENT_USER_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				currentUser: action.currentUser
			});
		case FETCH_CREATE_USER:
			return Object.assign({}, state, { loading: true });
		case FETCH_CREATE_USER_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				currentUser: action.currentUser
			});
		case FETCH_CREATE_SESSION_SUCCESS:
			return Object.assign({}, state, {
				currentUser: action.currentUser,
				loading: false
			});
		default:
			return state;
	}
};

export default users;
