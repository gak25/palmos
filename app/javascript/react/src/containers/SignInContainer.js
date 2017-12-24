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
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.validateEmailOrUsername = this.validateEmailOrUsername.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (
			this.validateEmailOrUsername(this.state.email) &&
			this.validatePassword(this.state.email)
		) {
			let formPayLoad = {
				email: this.state.email,
				password: this.state.password
			};
			this.props.signIn(formPayLoad);
			this.handleClearForm(event);
		}
	}

	handleEmailOrUsername(event) {
		this.validateEmailOrUsername(event.target.value);
		this.setState({ email: event.target.value });
	}

	handlePassword(event) {
		this.validatePassword(event.target.value);
		this.setState({ password: event.target.value });
	}

	validateEmailOrUsername(emailOrUsername) {
		if (emailOrUsername === '') {
			let newError = {
				emailOrUsername: 'Email/Username field may not be blank.'
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
			let newError = { password: 'Password field may not be blank.' };
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else {
			let errorState = this.state.errors;
			delete errorState.email;
			this.setState({ errors: errorState });
			return true;
		}
	}

	handleClearForm(event) {
		event.preventDefault();
		this.setState({
			errors: {},
			emailOrUsername: '',
			password: ''
		});
	}

	render() {
		let errorDiv;
		let errorItems;
		if (Object.keys(this.state.errors).length > 0) {
			errorItems = Object.values(this.state.errors).map(error => {
				return <li key={error}>{error}</li>;
			});
			errorDiv = <div className="callout alert">{errorItems}</div>;
		}
		return (
			<form className="callout" onSubmit={this.handleFormSubmit}>
				<h2>Sign In</h2>
				{errorDiv}
				<TextInput
					emailOrUsername={this.state.emailOrUsername}
					placeholder="Email or Username"
					name="emailOrUsername"
					inputType="text"
					id="credentials"
					value={this.state.email}
					handlerFunction={this.handleEmailOrUsername}
				/>
				<TextInput
					password={this.state.password}
					placeholder="Password"
					name="password"
					inputType="password"
					id="credentials"
					value={this.state.password}
					handlerFunction={this.handlePassword}
				/>
				<div className="button-group">
					<button className="button" onClick={this.handleClearForm}>
						Clear
					</button>
					<input className="button" type="submit" value="Submit" />
				</div>
			</form>
		);
	}
}

export default SignInContainer;
