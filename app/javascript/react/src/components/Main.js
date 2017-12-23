import React from 'react';
import {
	Route,
	Switch,
	NavLink,
	BrowserRouter as Router
} from 'react-router-dom';
import Dashboard from './Dashboard';
import FormContainer from './FormContainer';

const Main = props => {
	return (
		<main>
			<Switch>
				<Route path="/sign-in/" component={FormContainer} />
				<Route path="/" component={Dashboard} />
			</Switch>
		</main>
	);
};

export default Main;
