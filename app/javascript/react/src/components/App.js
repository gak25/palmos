import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import FormContainer from '../containers/FormContainer';
// import Main from './Main';

const App = props => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/sign-in" component={FormContainer} />
			</Switch>
		</div>
	);
};

export default App;
