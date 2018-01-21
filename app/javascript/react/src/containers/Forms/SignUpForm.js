import React, { Component } from 'react';
import { Field } from 'redux-form';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import { flashNotice } from '../../actions/flashNotice';

import Password from '../../components/formFields/Password';
// import ReCaptcha from '../components/formFields/ReCaptcha';
import TextInput from '../../components/formFields/TextInput';

class SignUpForm extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if (this.props.currentUser.id) {
			this.props.dispatch(push('/'));
			this.props.dispatch(flashNotice({ alert: 'You are already signed in.' }));
		}
	}

	render() {
		return (
			<div className="form-background">
				<form className="register-forms" onSubmit={this.props.handleSubmit}>
					<i className="fa fa-user fa-4x" id="lock-icon" aria-hidden="true" />
					{/* <div id="sign-in-instructions">
						<h3>Register</h3>
					</div> */}
					<div className="form-inputs">
						<Field name="handle" label="Username" component={TextInput} />
						<Field name="email" label="Email" component={TextInput} />
						<div>
							<Field
								name="firstName"
								label="First name"
								component={TextInput}
							/>
						</div>
						<div>
							<Field name="lastName" label="Last name" component={TextInput} />
						</div>
						<Field name="password" label="Password" component={Password} />
						<Field
							name="passwordConfirmation"
							label="Password confirmation"
							component={Password}
						/>
						{/* <Field name='reCaptchaResponse' component={ReCaptcha} /> */}
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
