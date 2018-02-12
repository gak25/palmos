import React, { Component } from 'react';

import * as DashboardActions from '../../actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.user,
		currentRegion: state.regions.currentRegion,
		dashboard: state.dashboard
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(DashboardActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
class DashboardHeader extends Component {
	render() {
		return (
			<div className="map-header">
				<div className="map-header-overview">
					<div className="map-nav-tab">
						<h4>{this.props.dashboard.dashboardCurrentTab}</h4>
					</div>
					{this.props.currentRegion ? (
						<div className="map-nav-tab">
							<h4>{this.props.currentRegion.region_nickname}</h4>
							<div className="map-nav-tab" id="map-nav-detail">
								<h5>
									{this.props.currentRegion.region_city},{' '}
									{this.props.currentRegion.region_state_code}
								</h5>
							</div>
						</div>
					) : (
						<div className="map-nav-tab">
							<h4>All Regions</h4>
						</div>
					)}
					{!this.props.dashboard.statusDisplayToggleIcon ? (
						<i
							className={
								this.props.dashboard.dashboardStatusVisibility
									? 'fa fa-expand fa-2x'
									: 'fa fa-compress fa-2x'
							}
							style={{
								cursor: 'pointer',
								color: '#605E5E',
								position: 'absolute',
								right: '10px',
								top: '10px'
							}}
							aria-hidden="true"
							onClick={() =>
								this.props.actions.toggleDashboardStatusVisibility()
							}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default DashboardHeader;
