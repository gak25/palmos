import React from 'react';
import {
	Route,
	Switch,
	NavLink,
	BrowserRouter as Router
} from 'react-router-dom';

const FormContainer = props => {
	return (
		<div>
			<h2>Sign in form</h2>
			<li>
				<NavLink to="/home/">Home</NavLink>
			</li>
		</div>
	);
};

export default FormContainer;
