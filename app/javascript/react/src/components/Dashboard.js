import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
	return (
		<div>
			<h2>Dashboard</h2>
			<li>
				<Link to="/sign-in">Sign In</Link>
			</li>
		</div>
	);
};

export default Dashboard;
