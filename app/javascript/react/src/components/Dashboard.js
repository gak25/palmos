import React from 'react';
import {
	Route,
	Switch,
	NavLink,
	BrowserRouter as Router
} from 'react-router-dom';

const Dashboard = props => {
	return (
		<div>
			<h2>Dashboard</h2>
			<li>
				<NavLink to="/sign-in/">Sign In</NavLink>
			</li>
		</div>
	);
};

export default Dashboard;
