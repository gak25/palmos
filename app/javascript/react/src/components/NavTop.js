import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '/app/assets/images/logo.png';

const NavTop = props => {
	return (
		<div>
			<div id="nav-palmos">
				{/* <img src={require('./images/logo.png')} /> */}
				Palmos
			</div>
			<div id="top-nav">
				<div className="header-overview">
					<div id="nav-tab">OVERVIEW</div>
					<div id="nav-tab">ANALYTICS</div>
					<div id="nav-tab">DATA</div>
					<div id="nav-tab">ALERTS</div>
				</div>
			</div>
		</div>
	);
};

export default NavTop;
