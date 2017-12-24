import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import NavTop from '../containers/NavTop';

const App = props => {
	return (
		<div>
			<h1>Hello from App!</h1>
			<NavTop />
			<Dashboard />
		</div>
	);
};

export default App;
