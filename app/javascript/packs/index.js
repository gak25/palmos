import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import FormContainer from '../react/src/containers/FormContainer';
import App from '../react/src/containers/App';

document.addEventListener('DOMContentLoaded', () => {
	let reactElement = document.getElementById('react-app');
	if (reactElement) {
		ReactDOM.render(
			<Router>
				<Switch>
					<Route exact path="/sign-in" component={FormContainer} />
					<Route exact path="/" component={App} />
				</Switch>
			</Router>,
			reactElement
		);
	}
});
