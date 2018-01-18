import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from '../containers/Main';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';

const App = () => (
	<div>
		<header>
			<Link to="/">Home</Link>
			<Link to="/about-us">About</Link>
		</header>

		<main>
			<Route exact path="/sign-up" component={SignUpContainer} />
			<Route exact path="/sign-in" component={SignInContainer} />
			<Route exact path="/" component={Main} />
		</main>
	</div>
);
