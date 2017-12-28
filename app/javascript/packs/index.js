import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SignInContainer from '../react/src/containers/SignInContainer';
import SignUpContainer from '../react/src/containers/SignUpContainer';
import App from '../react/src/containers/App';

document.addEventListener('DOMContentLoaded', () => {
	let reactElement = document.getElementById('react-app');
	if (reactElement) {
		ReactDOM.render(
			<Router>
				<Switch>
					<Route exact path="/sign-up" component={SignUpContainer} />
					<Route exact path="/sign-in" component={SignInContainer} />
					<Route exact path="/" component={App} />
				</Switch>
			</Router>,
			reactElement
		);
	}
});
