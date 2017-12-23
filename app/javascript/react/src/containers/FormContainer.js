import React from 'react';
import { Link } from 'react-router-dom';

const FormContainer = props => {
	return (
		<div>
			<h2>Sign in form</h2>
			<li>
				<Link to="/">Home</Link>
			</li>
		</div>
	);
};

export default FormContainer;
