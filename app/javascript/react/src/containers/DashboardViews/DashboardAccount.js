import React, { Component } from 'react';
import EditUserForm from '../../forms/EditUserFormContainer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.user
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
