import React, { Component } from 'react';
import Dashboard from './Dashboard';
import NavTop from './NavTop';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.item
	};
}

@connect(mapStateToProps)
class Main extends Component {
	render() {
		return (
			<div>
				<NavTop currentUser={this.props.currentUser} />
				<Dashboard currentUser={this.props.currentUser} />
			</div>
		);
	}
}

export default Main;
