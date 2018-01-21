import React, { Component } from 'react';
import NicknameForm from '../../Forms/NicknameForm';

class DashboardRegionStatus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {}
		};
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

	componentWillReceiveProps(nextProps) {
		if (nextProps.region != this.props.region) {
			this.setState({ region: nextProps.region });
		}
	}

	render() {
		return (
			<div id="current-detail">
				<div id="current-detail-name">
					<div>Region ID: {this.props.region.id}</div>
					<NicknameForm
						changeNickname={this.handleRegionNicknameInput}
						nickname={this.props.region.region_nickname}
					/>
				</div>
				<h5 id="detail-lat-lng">
					{truncateDecimals(this.props.region.region_latitude, 6)},{' '}
					{truncateDecimals(this.props.region.region_longitude, 6)}
				</h5>
				<hr id="sensor-section-divider" />
			</div>
		);
	}
}

export default DashboardRegionStatus;
