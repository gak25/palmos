import React, { Component } from 'react';
import NicknameForm from '../../../forms/NicknameForm';

import * as DashboardVisibilityActions from '../../../actions/componentVisibility';
import * as DashboardView from '../../../actions/dashboardView';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.user,
		region: state.regions
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(...DashboardView, dispatch)
	};
}

@connect(mapStateToProps, mapDispatchToProps)
class DashboardRegionStatus extends Component {
	constructor(props) {
		super(props);
		this.handleRegionNicknameInput = this.handleRegionNicknameInput.bind(this);
	}

	handleRegionNicknameInput(nickname) {
		fetch(
			`/api/v1/users/${this.props.currentUser.handle}/regions/${
				this.props.region.id
			}`,
			{
				credentials: 'same-origin',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ region_nickname: nickname })
			}
		)
			.then(response => response.json())
			.then(response => {
				let region = this.state.region;
				region.sensor_nickname = response.region_nickname;
				this.setState({ region: region });
			});
	}

	render() {
		const currentRegion = this.props.region.currentRegion;
		return (
			<div id="current-detail">
				<div id="current-detail-name">
					<div>Region ID: {currentRegion.id}</div>
					{/* <NicknameForm
						changeNickname={this.handleRegionNicknameInput}
						nickname={currentRegion.region_nickname}
					/> */}
				</div>
				<h5 id="detail-lat-lng">
					{truncateDecimals(currentRegion.region_latitude, 6)},{' '}
					{truncateDecimals(currentRegion.region_longitude, 6)}
				</h5>
				<hr id="sensor-section-divider" />
			</div>
		);
	}
}

export default DashboardRegionStatus;
