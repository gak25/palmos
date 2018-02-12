import React from 'react';

const Password = props => {
	let { label, meta: { error, touched }, name } = props;
	return (
		<fieldset>
			<input
				className="credentials"
				id={touched && error ? 'error' : null}
				placeholder={label}
				type="password"
				{...props.input}
			/>
		</fieldset>
	);
};

export default Password;
