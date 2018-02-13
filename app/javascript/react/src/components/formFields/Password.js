import React from 'react';

const Password = props => {
	let { label, meta: { error, touched }, name, className } = props;
	return (
		<fieldset>
			<input
				className={className}
				id={touched && error ? 'error' : null}
				placeholder={label}
				type="password"
				{...props.input}
			/>
		</fieldset>
	);
};

export default Password;
