import React from 'react';

const TextInput = props => {
	let { label, meta: { error, touched }, name, className } = props;
	let changeHandler = event => {
		console.log('here!!!!!!!!!');
		// props.switchHandler(event.target.value);
	};

	return (
		<fieldset>
			<input
				className={className}
				id={touched && error ? 'error' : null}
				placeholder={label}
				type="text"
				onChange={changeHandler}
				{...props.input}
			/>
		</fieldset>
	);
};

export default TextInput;
