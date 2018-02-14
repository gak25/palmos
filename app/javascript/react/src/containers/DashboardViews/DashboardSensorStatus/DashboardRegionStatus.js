import React, { Component } from 'react';
import NicknameForm from '../../../forms/NicknameForm';

import * as DashboardView from '../../../actions/dashboard';
import NicknameContainer from '../../../forms/NicknameContainer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.user,
		region: state.regions
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(DashboardView, dispatch)
	};
}

@connect(mapStateToProps, mapDispatchToProps)
class DashboardRegionStatus extends Component {
	render() {
		const currentRegion = this.props.region.currentRegion;
		return (
			<div id="current-detail">
				<div id="current-detail-name">
					<div>Region ID: {currentRegion.id}</div>
					<NicknameContainer />
				</div>
				<div className="sensor-top-detail">
					<i
						className="fa fa-map-marker"
						aria-hidden="true"
						style={{ marginRight: 8 }}
					/>
					{currentRegion.region_latitude}
					{'   '},
					{currentRegion.region_longitude}
				</div>
				<hr id="sensor-section-divider" />
			</div>
		);
	}
}

export default DashboardRegionStatus;
