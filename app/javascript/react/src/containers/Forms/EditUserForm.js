import React, { Component } from 'react';
import { Field } from 'redux-form';

import Password from '../../components/formFields/Password';
import TextInput from '../../components/formFields/TextInput';

class EditUserForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="register-forms" onSubmit={this.props.handleSubmit}>
				<Field name="email" label="Email" component={TextInput} />
				<Field name="firstName" label="First name" component={TextInput} />
				<Field name="lastName" label="Last name" component={TextInput} />
				<Field name="password" label="Current password" component={Password} />
				<div className="form-actions">
					<button
						id="button-cta"
						disabled={this.props.submitting}
						type="submit"
					>
						Update
					</button>
				</div>
			</form>
		);
	}
}

export default EditUserForm;
