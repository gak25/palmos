import React, { Component } from 'react';
import EditUserForm from '../../connectors/EditUser';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.user
	};
}

@connect(mapStateToProps)
class DashboardAccount extends Component {
	render() {
		return (
			<div>
				<h1>Hi, {this.props.currentUser.handle}</h1>
				<EditUserForm />
			</div>
		);
	}
}

export default DashboardAccount;
