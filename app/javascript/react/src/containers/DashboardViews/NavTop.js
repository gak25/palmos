import React, { Component } from 'react';
import * as DashboardViewActions from '../../actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.user,
		dashboardAccountDropdownVisibility:
			state.dashboard.dashboardAccountDropdownVisibility,
		dashboardCurrentView: state.dashboard.dashboardCurrentView
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(DashboardViewActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
class NavTop extends Component {
	render() {
		const accountDropdown = (
			<div className="account-dropdown">
				<div onClick={() => this.props.actions.setDashboardView('ACCOUNT')}>
					Account
				</div>
				<div onClick={() => this.props.actions.setDashboardView('HARDWARE')}>
					Hardware
				</div>
				<a href="/sign-out" methods="delete">
					Sign Out
				</a>
			</div>
		);

		return (
			<div>
				<div id="nav-palmos">
					<h1>PALMOS</h1>
				</div>
				<div id="top-nav">
					<div className="header-overview">
						<div
							className="nav-tab"
							onClick={() => this.props.actions.setDashboardView('OVERVIEW')}
						>
							OVERVIEW
						</div>
						<div
							className="nav-tab"
							onClick={() => this.props.actions.setDashboardView('ANALYTICS')}
						>
							ANALYTICS
						</div>
						<div
							className="nav-tab"
							onClick={() => this.props.actions.setDashboardView('DATA')}
						>
							DATA
						</div>
						<div
							className="nav-tab"
							onClick={() => this.props.actions.setDashboardView('ALERTS')}
						>
							ALERTS
						</div>
						<div
							className="nav-tab"
							id="account-dropdown-tab"
							onClick={() => this.props.actions.toggleAccountDropdown()}
						>
							<i className="fa fa-user-circle fa-2x" aria-hidden="true" />
							<i className="fa fa-chevron-down" aria-hidden="true" />
						</div>
						{this.props.dashboardAccountDropdownVisibility
							? accountDropdown
							: null}
					</div>
				</div>
			</div>
		);
	}
}

export default NavTop;
