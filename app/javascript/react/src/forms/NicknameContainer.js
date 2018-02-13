import React, { Component } from 'react';
import { change, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import NicknameForm from '../forms/NicknameForm';

import { clearNotices, flashNotice } from '../actions/flashNotice';

let validate = values => {
	const errors = {};
	if (!values.login) {
		errors.nickname = "can't be blank";
	}
	return errors;
};

let onSubmit = (values, dispatch) => {
	return dispatch(createSession(values))
		.then(data => {
			dispatch(clearNotices());
			// dispatch(flashNotice({ success: `Nickname set to ${data}.` }));
			dispatch(
				flashNotice({ success: `Nickname set to INSERT NICKNAME HERE` })
			);
		})
		.catch(error => {
			dispatch(clearNotices());
			dispatch(flashNotice({ alert: error.errors._error }));
		});
};

const mapStateToProps = state => {
	return {
		sensor: state.sensors.currentSensor
	};
};

@connect(mapStateToProps)
class NicknameContainer extends Component {
	render() {
		const switchHandler = value => {
			this.props.dispatch(change('nickname', 'nickname', value));
		};
		const ConnectedNicknameForm = reduxForm({
			form: 'nickname',
			validate,
			onSubmit
		})(NicknameForm);

		return (
			<ConnectedNicknameForm
				sensor={this.props.sensor}
				switchHandler={switchHandler}
			/>
		);
	}
}

export default NicknameContainer;
