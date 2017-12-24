import React from 'react';

const TextInput = props => {
	return (
		<label>
			{props.label}
			<input
				name={props.name}
				onChange={props.handlerFunction}
				type={props.inputType}
				value={props.content}
			/>
		</label>
	);
};

export default TextInput;
