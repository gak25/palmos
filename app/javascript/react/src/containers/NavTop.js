import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '/app/assets/images/palmos_text.png';

class NavTop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdown: false
		};
		this.handleDropdown = this.handleDropdown.bind(this);
	}

	handleDropdown(click) {
		click.preventDefault();
		this.setState({ dropdown: !this.state.dropdown });
	}
	render() {
		let navDropdown = null;
		if (this.state.dropdown) {
			navDropdown = (
				<div className="account-dropdown">
					<Link to="/account">Account</Link>
					<Link to="/hardware">Hardware</Link>
					<a href="/sign-out" methods="delete">
						Sign Out
					</a>
				</div>
			);
		}

		return (
			<div>
				<div id="nav-palmos">
					<h1>PALMOS</h1>
				</div>
				<div id="top-nav">
					<div className="header-overview">
						<div className="nav-tab">
							OVERVIEW
							<i className="fa fa-chevron-down" aria-hidden="true" />
						</div>
						<div className="nav-tab">
							ANALYTICS
							<i className="fa fa-chevron-down" aria-hidden="true" />
						</div>
						<div className="nav-tab">
							DATA
							<i className="fa fa-chevron-down" aria-hidden="true" />
						</div>
						<div className="nav-tab">
							ALERTS
							<i className="fa fa-chevron-down" aria-hidden="true" />
						</div>
						<div
							className="nav-tab"
							id="account-dropdown-tab"
							onClick={this.handleDropdown}
						>
							<i className="fa fa-user-circle fa-2x" aria-hidden="true" />
							<i className="fa fa-chevron-down" aria-hidden="true" />
						</div>
						{navDropdown}
					</div>
				</div>
			</div>
		);
	}
}

export default NavTop;
