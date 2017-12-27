import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';

class SignInContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			emailOrUsername: '',
			password: ''
		};
		this.handleEmailOrUsername = this.handleEmailOrUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.validateEmailOrUsername = this.validateEmailOrUsername.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (
			this.validateEmailOrUsername(this.state.emailOrUsername) &&
			this.validatePassword(this.state.password)
		) {
			let formPayLoad = {
				emailOrUsername: this.state.emailOrUsername,
				password: this.state.password
			};
			this.props.signIn(formPayLoad);
			this.handleClearForm(event);
		}
	}

	handleEmailOrUsername(event) {
		this.validateEmailOrUsername(event.target.value);
		this.setState({ emailOrUsername: event.target.value });
	}

	handlePassword(event) {
		this.validatePassword(event.target.value);
		this.setState({ password: event.target.value });
	}

	validateEmailOrUsername(emailOrUsername) {
		if (emailOrUsername === '') {
			let newError = {
				emailOrUsername: 'Email/Username field may not be blank'
			};
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else {
			let errorState = this.state.errors;
			delete errorState.email;
			this.setState({ errors: errorState });
			return true;
		}
	}

	validatePassword(password) {
		if (password === '') {
			let newError = { password: 'Password field may not be blank' };
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else {
			let errorState = this.state.errors;
			delete errorState.email;
			this.setState({ errors: errorState });
			return true;
		}
	}

	render() {
		let errorDiv;
		let errorItems;
		if (Object.keys(this.state.errors).length > 0) {
			errorItems = Object.values(this.state.errors).map(error => {
				return <div key={error}>{error}</div>;
			});
			errorDiv = <div className="register-form-error">{errorItems}</div>;
		}
		return (
			<form className="register-forms" onSubmit={this.handleFormSubmit}>
				{errorDiv}
				<TextInput
					emailOrUsername={this.state.emailOrUsername}
					placeholder="Email or Username"
					name="emailOrUsername"
					autoComplete="off"
					autoFocus="on"
					value={this.state.email}
					handlerFunction={this.handleEmailOrUsername}
				/>
				<TextInput
					password={this.state.password}
					placeholder="Password"
					name="password"
					inputType="password"
					value={this.state.password}
					handlerFunction={this.handlePassword}
				/>
				<div className="button-group">
					<Link to="/sign-up">Sign Up</Link>
					<button className="form-submit-button" type="submit" />
				</div>
			</form>
		);
	}
}

export default SignInContainer;
