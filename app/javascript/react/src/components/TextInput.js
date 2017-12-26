import React from 'react';

const TextInput = props => {
	return (
		<input
			name={props.name}
			placeholder={props.placeholder}
			autoFocus={props.autoFocus}
			autoComplete={props.autoFocus}
			onChange={props.handlerFunction}
			className={props.className}
			type={props.inputType}
			value={props.value}
		/>
	);
};

TextInput.defaultProps = {
	inputType: 'text',
	className: 'credentials',
	autoFocus: 'off',
	autoComplete: 'off'
};

export default TextInput;
