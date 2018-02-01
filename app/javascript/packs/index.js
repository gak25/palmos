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

import currentUser from '../react/src/reducers/currentUser';
import notices from '../react/src/reducers/notices';
import componentVisibility from '../react/src/reducers/componentVisibility';
import dashboardView from '../react/src/reducers/dashboardView';
import regions from '../react/src/reducers/regions';

const history = createBrowserHistory();

const middlewares = [
	createLogger({
		collapsed: true
	}),
	thunkMiddleware,
	routerMiddleware(history)
];

const store = createStore(
	combineReducers({
		currentUser,
		notices,
		componentVisibility,
		dashboardView,
		regions,
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
