import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';

var EMAIL_REGEXP = /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/;
var HANDLE_REGEXP = /\A[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*\z/;

var stringWhiteSpaceTrim = /^\s+|\s+$/g;

class SignUpContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			firstName: '',
			lastName: '',
			handle: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			fireRedirect: false
		};

		this.handleFirstName = this.handleFirstName.bind(this);
		this.handleLastName = this.handleLastName.bind(this);
		this.handleHandle = this.handleHandle.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handlePasswordConfirmation = this.handlePasswordConfirmation.bind(
			this
		);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.createUser = this.createUser.bind(this);

		this.validateFirstName = this.validateFirstName.bind(this);
		this.validateLastName = this.validateLastName.bind(this);
		this.validateHandle = this.validateHandle.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
		this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
			this
		);
	}

	createUser(formPayload) {
		fetch('/api/v1/users/create', {
			credentials: 'same-origin',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formPayload)
		}).then(response => {
			if (response.ok) {
				this.setState({ fireRedirect: true });
			}
		});
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (
			this.validateFirstName(this.state.firstName) &&
			this.validateLastName(this.state.lastName) &&
			this.validateHandle(this.state.handle) &&
			this.validateEmail(this.state.email) &&
			this.validatePassword(this.state.password) &&
			this.validatePasswordConfirmation(this.state.passwordConfirmation)
		) {
			let formPayload = {
				first_name: this.state.firstName,
				last_name: this.state.lastName,
				handle: this.state.handle,
				email: this.state.email,
				password: this.state.password
			};
			this.createUser(formPayload);
		}
	}

	handleFirstName(event) {
		var input = event.target.value.replace(stringWhiteSpaceTrim, '');
		input = input.charAt(0).toUpperCase() + input.slice(1);
		this.validateFirstName(input);
		this.setState({ firstName: input });
	}

	handleLastName(event) {
		var input = event.target.value.replace(stringWhiteSpaceTrim, '');
		input = input.charAt(0).toUpperCase() + input.slice(1);
		this.validateLastName(input);
		this.setState({ lastName: input });
	}

	handleHandle(event) {
		var input = event.target.value.replace(stringWhiteSpaceTrim, '');
		this.validateHandle(input);
		this.setState({ handle: input });
	}

	handleEmail(event) {
		var input = event.target.value;
		input = input.toLowerCase();
		this.setState({ email: input });
	}

	handlePassword(event) {
		this.validatePassword(event.target.value);
		this.setState({ password: event.target.value });
	}

	handlePasswordConfirmation(event) {
		this.validatePasswordConfirmation(event.target.value);
		this.setState({ passwordConfirmation: event.target.value });
	}

	validateFirstName(firstName) {
		if (firstName === '') {
			let newError = { firstName: 'First name field may not be blank' };
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else {
			let errorState = this.state.errors;
			delete errorState.firstName;
			this.setState({ errors: errorState });
			return true;
		}
	}

	validateLastName(lastName) {
		if (lastName === '') {
			let newError = { lastName: 'Last name field may not be blank' };
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else {
			let errorState = this.state.errors;
			delete errorState.lastName;
			this.setState({ errors: errorState });
			return true;
		}
	}

	validateHandle(handle) {
		if (handle === '') {
			let newError = { handle: 'Handle may not be blank' };
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else {
			let errorState = this.state.errors;
			delete errorState.handle;
			this.setState({ errors: errorState });
			return true;
		}
	}

	validateEmail(email) {
		if (email === '') {
			let newError = { email: 'Email field may not be blank' };
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
			delete errorState.password;
			this.setState({ errors: errorState });
			return true;
		}
	}

	validatePasswordConfirmation(passwordConfirmation) {
		if (passwordConfirmation === '') {
			let newError = {
				passwordConfirmation: 'Password confirmation field may not be blank'
			};
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else if (passwordConfirmation != this.state.password) {
			let newError = { passwordConfirmation: 'Passwords do not match' };
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else {
			let errorState = this.state.errors;
			delete errorState.passwordConfirmation;
			this.setState({ errors: errorState });
			return true;
		}
	}

	handleClearForm(event) {
		event.preventDefault();
		this.setState({
			errors: {},
			firstName: '',
			lastName: '',
			handle: '',
			email: '',
			password: '',
			passwordConfirmation: ''
		});
	}

	render() {
		const { from } = this.props.location.state || '/';
		const { fireRedirect } = this.state;
		let errorDiv;
		let errorItems;
		if (Object.keys(this.state.errors).length > 0) {
			errorItems = Object.values(this.state.errors).map(error => {
				return <div key={error}>{error}</div>;
			});
			errorDiv = <div className="register-form-error">{errorItems}</div>;
		}
		return (
			<div className="form-background">
				<form className="register-forms" onSubmit={this.handleFormSubmit}>
					{errorDiv}
					<TextInput
						firstName={this.state.firstName}
						placeholder="First Name"
						name="firstName"
						id="name"
						autoComplete="off"
						autoFocus="on"
						value={this.state.firstName}
						handlerFunction={this.handleFirstName}
					/>
					<TextInput
						lastName={this.state.lastName}
						placeholder="Last Name"
						name="lastName"
						id="name"
						autoComplete="off"
						value={this.state.lastName}
						handlerFunction={this.handleLastName}
					/>
					<TextInput
						firstName={this.state.handle}
						placeholder="handle"
						name="handle"
						autoComplete="off"
						value={this.state.handle}
						handlerFunction={this.handleHandle}
					/>
					<TextInput
						email={this.state.email}
						placeholder="Email"
						name="email"
						autoComplete="off"
						value={this.state.email}
						handlerFunction={this.handleEmail}
					/>
					<TextInput
						password={this.state.password}
						placeholder="Password"
						name="password"
						inputType="password"
						value={this.state.password}
						handlerFunction={this.handlePassword}
					/>
					<TextInput
						passwordConfirmation={this.state.passwordConfirmation}
						placeholder="Password Confirmation"
						name="passwordConfirmation"
						inputType="password"
						value={this.state.passwordConfirmation}
						handlerFunction={this.handlePasswordConfirmation}
					/>
					<div className="button-group">
						{/* <div id="button-outline" onClick={this.handleClearForm}>
							Clear
						</div> */}
						<Link to="/sign-in" id="button-outline">
							Sign In
						</Link>
						<button id="button-cta" type="submit">
							Continue
						</button>
					</div>
				</form>
				{fireRedirect && <Redirect to={from || '/'} />}
			</div>
		);
	}
}

export default SignUpContainer;
