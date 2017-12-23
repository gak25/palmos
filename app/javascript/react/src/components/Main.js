import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import FormContainer from '../containers/FormContainer';

const Main = props => {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/sign-in" component={FormContainer} />
			</Switch>
		</main>
	);
};

export default Main;
