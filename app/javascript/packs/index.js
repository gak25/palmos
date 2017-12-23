import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
	Switch,
	NavLink,
	BrowserRouter as Router
} from 'react-router-dom';

import Main from '../react/src/components/Main';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Router>
			<Main />
		</Router>,
		document.getElementById('app')
	);
});
