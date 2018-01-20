import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';

import { flashNotice } from '../actions/flashNotice';

import Password from '../components/formFields/Password';
import TextInput from '../components/formFields/TextInput';

class SignInForm extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if (this.props.currentUser.id) {
			this.props.dispatch(push('/sign-in'));
			this.props.dispatch(flashNotice({ alert: 'You are already signed in.' }));
		}
	}

	render() {
		return (
			<div className="form-background">
				<form className="register-forms" onSubmit={this.props.handleSubmit}>
					<i className="fa fa-lock fa-4x" id="lock-icon" aria-hidden="true" />
					<div id="sign-in-instructions">
						<p>Just exploring? Sign in with:</p>
						<p>
							<strong>palmos / palmos</strong>
						</p>
					</div>
					<div className="form-inputs">
						<Field
							name="login"
							label="Email or username"
							component={TextInput}
						/>
						<Field
							name="password"
							label="Password"
							showForgotLink={true}
							component={Password}
						/>
					</div>
					<div className="form-actions">
						<button
							className="button"
							disabled={this.props.submitting}
							type="submit"
						>
							Sign In
						</button>
						&nbsp; &nbsp;
						<Link className="button" to="/sign-up">
							Sign Up
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default SignInForm;
