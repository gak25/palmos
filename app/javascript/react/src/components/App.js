import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import NavTop from './NavTop';

const App = props => {
	return (
		<div>
			<NavTop />
			<Dashboard />
		</div>
	);
};

export default App;
