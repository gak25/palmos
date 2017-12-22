import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
	return (
		<div>
			<h2>Dashboard</h2>
			<Link to="/sign-in">Register</Link>
		</div>
	);
};

export default Dashboard;
