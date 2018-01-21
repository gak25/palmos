import React from 'react';

const Password = props => {
	let { label, meta: { error, touched }, name } = props;
	// let labelElement;
	//
	// if (props.showForgotLink) {
	// 	labelElement = (
	// 		<label>
	// 			<a href="password_resets/new">Forgot your password?</a>
	// 		</label>
	// 	);
	// } else {
	// 	labelElement = <label htmlFor={name}>{label}</label>;
	// }

	return (
		<fieldset>
			<input
				className="credentials"
				id={touched && error ? 'error' : null}
				placeholder={label}
				type="password"
				{...props.input}
			/>
			{/* {touched &&
				error && <span className="form-error is-visible">{error}</span>} */}
		</fieldset>
	);
};

export default Password;
