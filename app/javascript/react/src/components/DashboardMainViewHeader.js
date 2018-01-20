import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as DashboardVisibilityActions from '../actions/componentVisibility';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.item,
		componentVisibility: state.componentVisibility
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(DashboardVisibilityActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
class DashboardMainViewHeader extends Component {
	render() {
		return (
			<div className="map-header">
				<div className="map-header-overview">
					<div className="map-nav-tab">
						<h4>MAP OVERVIEW</h4>
					</div>
					<div className="map-nav-tab">
						{this.props.currentRegion ? (
							this.props.currentRegion.region_nickname ? (
								<h4>{this.props.currentRegion.region_nickname}</h4>
							) : (
								<h4>{this.props.currentRegion.region_city}</h4>
							)
						) : (
							<h5>All Regions</h5>
						)}
					</div>
					<div className="map-nav-tab" id="map-nav-detail">
						{this.props.currentRegion ? (
							<div>
								<h5>
									{this.props.currentRegion.region_city},{' '}
									{this.props.currentRegion.region_state_code}
								</h5>
							</div>
						) : null}
					</div>
					<i
						className={
							this.props.componentVisibility.dashboardStatusVisibility
								? 'fa fa-expand'
								: 'fa fa-compress'
						}
						style={{
							margin: '5px',
							cursor: 'pointer',
							color: '#605E5E',
							position: 'absolute',
							right: '10px',
							top: '10px'
						}}
						aria-hidden="true"
						onClick={() => this.props.actions.toggleDashboardStatusVisibility()}
					/>
				</div>
			</div>
		);
	}
}

export default DashboardMainViewHeader;
