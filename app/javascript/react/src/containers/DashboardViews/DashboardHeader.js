import React, { Component } from 'react';

import * as DashboardVisibilityActions from '../../actions/componentVisibility';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.user,
		componentVisibility: state.componentVisibility,
		currentRegion: state.regions.currentRegion,
		dashboardView: state.dashboardView
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(DashboardVisibilityActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
class DashboardHeader extends Component {
	render() {
		return (
			<div className="map-header">
				<div className="map-header-overview">
					<div className="map-nav-tab">
						<h4>{this.props.dashboardView.dashboardCurrentTab}</h4>
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
					{!this.props.dashboardView.statusDisplayToggleIcon ? (
						<i
							className={
								this.props.componentVisibility.dashboardStatusVisibility
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
