// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
//
// import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
//
// export default combineReducers({
// 	routing: routerReducer
// });
//
// import SignInContainer from '../react/src/containers/SignInContainer';
// import SignUpContainer from '../react/src/containers/SignUpContainer';
// import Main from '../react/src/containers/Main';
//
// document.addEventListener('DOMContentLoaded', () => {
// 	let reactElement = document.getElementById('react-app');
// 	if (reactElement) {
// 		ReactDOM.render(
// 			<Router>
// 				<Switch>
// 					<Route exact path="/sign-up" component={SignUpContainer} />
// 					<Route exact path="/sign-in" component={SignInContainer} />
// 					<Route exact path="/" component={App} />
// 				</Switch>
// 			</Router>,
// 			reactElement
// 		);
// 	}
// });

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from '../react/src/store/createStore';
import Main from '../react/src/containers/Main';

const target = document.getElementById('react-app');
// const target = document.querySelector('#react-app');

document.addEventListener('DOMContentLoaded', () => {
	if (target) {
		render(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						<Main />
					</div>
				</ConnectedRouter>
			</Provider>,
			target
		);
	} else {
		console.log('could not load DOM target root');
	}
});
