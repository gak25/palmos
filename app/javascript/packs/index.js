import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import {
	ConnectedRouter,
	routerReducer,
	routerMiddleware,
	push
} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from '../react/src/containers/App';
import SignUpForm from '../react/src/forms/SignUpFormContainer';
import SignInForm from '../react/src/forms/SignInFormContainer';

import users from '../react/src/reducers/users';
import notices from '../react/src/reducers/notices';
import dashboard from '../react/src/reducers/dashboard';
import regions from '../react/src/reducers/regions';
import sensors from '../react/src/reducers/sensors';

const history = createBrowserHistory();

const middlewares = [
	thunkMiddleware,
	createLogger({
		collapsed: true
	}),
	routerMiddleware(history)
];

const store = createStore(
	combineReducers({
		users,
		notices,
		dashboard,
		regions,
		sensors,
		form: formReducer,
		router: routerReducer
	}),
	applyMiddleware(...middlewares)
);

const target = document.getElementById('react-app');

document.addEventListener('DOMContentLoaded', () => {
	if (target) {
		ReactDOM.render(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						<Route exact path="/sign-up" component={SignUpForm} />
						<Route exact path="/sign-in" component={SignInForm} />
						<Route exact path="/" component={App} />
					</div>
				</ConnectedRouter>
			</Provider>,
			target
		);
	}
});
