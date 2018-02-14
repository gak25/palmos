import React, { Component } from 'react';
import { Field } from 'redux-form';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import { flashNotice } from '../actions/flashNotice';

import Password from '../components/formFields/Password';
import TextInput from '../components/formFields/TextInput';

class SignUpForm extends Component {
	componentWillMount() {
		if (this.props.currentUser) {
			this.props.dispatch(push('/'));
			this.props.dispatch(flashNotice({ alert: 'You are already signed in.' }));
		}
	}

	render() {
		return (
			<div className="form-background">
				<form className="register-forms" onSubmit={this.props.handleSubmit}>
					<i className="fa fa-user fa-4x" id="lock-icon" aria-hidden="true" />
					<div className="form-inputs">
						<Field
							name="handle"
							label="Username"
							className="credentials"
							component={TextInput}
						/>
						<Field
							name="email"
							label="Email"
							className="credentials"
							component={TextInput}
						/>
						<div>
							<Field
								name="firstName"
								label="First name"
								className="credentials"
								component={TextInput}
							/>
						</div>
						<div>
							<Field
								name="lastName"
								label="Last name"
								className="credentials"
								component={TextInput}
							/>
						</div>
						<Field
							name="password"
							label="Password"
							className="credentials"
							component={Password}
						/>
						<Field
							name="passwordConfirmation"
							label="Password confirmation"
							className="credentials"
							component={Password}
						/>
					</div>
					<div className="form-actions">
						<Link id="button-outline" to="/sign-in">
							Sign In
						</Link>
						&nbsp;
						<button
							id="button-cta"
							disabled={this.props.submitting}
							type="submit"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
