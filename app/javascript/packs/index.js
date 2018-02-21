// React.js
import React from 'react';
import ReactDOM from 'react-dom';

// Redux for global state management
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Redux-persist for persisting the current redux state on page refresh/browser window close
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react';

// React-router for full client-side rendering of UI
import { Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// Redux helpers for usage with React-router
import {
	ConnectedRouter,
	routerReducer,
	routerMiddleware,
	push
} from 'react-router-redux';

// Main Redux components rendered by React-router
import App from '../react/src/containers/App';
import SignUpForm from '../react/src/forms/SignUpFormContainer';
import SignInForm from '../react/src/forms/SignInFormContainer';

// Redux reducers
import users from '../react/src/reducers/users';
import notices from '../react/src/reducers/notices';
import dashboard from '../react/src/reducers/dashboard';
import regions from '../react/src/reducers/regions';
import sensors from '../react/src/reducers/sensors';
import { reducer as formReducer } from 'redux-form';

// Redux-middleware setup
let middleware = [thunkMiddleware, routerMiddleware(history)];

// Add Redux logger for test and development environments
if (process.env.NODE_ENV !== 'production') {
	let reduxLogger = createLogger({
		collapsed: true
	});
	middleware = [...middleware, reduxLogger];
}

// Redux-persist setup
const persistConfig = {
	key: 'root',
	storage
};

// Redux-persist root reducer
const rootReducer = combineReducers({
	users,
	notices,
	dashboard,
	regions,
	sensors,
	form: formReducer,
	router: routerReducer
});

// Redux store setup using persistReducer from Redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

const target = document.getElementById('react-app');
document.addEventListener('DOMContentLoaded', () => {
	if (target) {
		ReactDOM.render(
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouter history={history}>
						<div>
							<Route exact path="/sign-up" component={SignUpForm} />
							<Route exact path="/sign-in" component={SignInForm} />
							<Route exact path="/" component={App} />
						</div>
					</ConnectedRouter>
				</PersistGate>
			</Provider>,
			target
		);
	}
});
