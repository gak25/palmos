import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../react/src/components/App';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Router basename="/">
			<App />
		</Router>,
		document.getElementById('app')
	);
});
