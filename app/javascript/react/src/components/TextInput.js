import React from 'react';

const TextInput = props => {
	return (
		<input
			name={props.name}
			placeholder={props.placeholder}
			onChange={props.handlerFunction}
			type={props.inputType}
			value={props.content}
		/>
	);
};

export default TextInput;
