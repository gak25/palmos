import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';

class SignUpContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			firstName: '',
			lastName: '',
			password: '',
			passwordConfirmation: '',
			email: ''
		};

		this.handleFirstName = this.handleFirstName.bind(this);
		this.handleLastName = this.handleLastName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePasswordConfirmation.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);

		this.validateFirstName = this.validateFirstName.bind(this);
		this.validateLastName = this.validateLastName.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
		this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
			this
		);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (
			this.validateFirstName(this.state.firstName) &&
			this.validateLastName(this.state.lastName) &&
			this.validateEmail(this.state.email) &&
			this.validatePassword(this.state.email) &&
			this.validatePasswordConfirmation(this.state.email)
		) {
			let formPayLoad = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password,
				passwordConfirmation: this.state.passwordConfirmation
			};
			this.props.addSubmissions(formPayLoad);
			this.handleClearForm(event);
		}
	}

	handleFirstName(event) {
		this.validateFirstName(event.target.value);
		this.setState({ firstName: event.target.value });
	}

	handleLastName(event) {
		this.validateLastName(event.target.value);
		this.setState({ lastName: event.target.value });
	}

	handleEmail(event) {
		this.validateEmail(event.target.value);
		this.setState({ email: event.target.value });
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
			delete errorState.email;
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
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordConfirmation: ''
		});
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
					firstName={this.state.firstName}
					placeholder="First Name"
					name="firstName"
					id="name"
					value={this.state.firstName}
					handlerFunction={this.handleFirstName}
				/>
				<TextInput
					lastName={this.state.lastName}
					placeholder="Last Name"
					name="lastName"
					id="name"
					value={this.state.lastName}
					handlerFunction={this.handleLastName}
				/>
				<TextInput
					email={this.state.email}
					placeholder="Email"
					name="email"
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
					<button className="button" onClick={this.handleClearForm}>
						Clear
					</button>
					<Link to="/sign-in">Sign In</Link>
					<button className="form-submit-button" type="submit" />
				</div>
			</form>
		);
	}
}

export default SignUpContainer;
