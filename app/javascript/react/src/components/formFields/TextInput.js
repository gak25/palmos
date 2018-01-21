import React from 'react';

const TextInput = props => {
	let { label, meta: { error, touched }, name } = props;

	return (
		<fieldset>
			<input
				className="credentials"
				id={touched && error ? 'error' : null}
				placeholder={label}
				type="text"
				{...props.input}
			/>
		</fieldset>
	);
};

export default TextInput;
