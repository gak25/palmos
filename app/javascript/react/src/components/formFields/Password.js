import React from 'react';

const Password = props => {
	let { label, meta: { error, touched }, name } = props;
	let labelElement;

	if (props.showForgotLink) {
		labelElement = (
			<label>
				<a href="password_resets/new">Forgot your password?</a>
			</label>
		);
	} else {
		labelElement = (
			<label
				// className={touched && error && 'is-invalid-label'}
				htmlFor={name}
			>
				{label}
			</label>
		);
	}

	return (
		<fieldset>
			{labelElement}
			<input
				// className={touched && error && 'is-invalid-input'}
				id={name}
				type="password"
				{...props.input}
			/>
			{touched &&
				error && <span className="form-error is-visible">{error}</span>}
		</fieldset>
	);
};

export default Password;
