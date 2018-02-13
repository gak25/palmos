import React, { Component } from 'react';
import { Field } from 'redux-form';

import TextInput from '../components/formFields/TextInput';

class NicknameForm extends Component {
	render() {
		return (
			<form className="sensor-nickname-form" onSubmit={this.props.handleSubmit}>
				<div style={{ float: 'left' }}>
					<Field
						name="nickname"
						label="nickname"
						switchHandler={this.props.switchHandler}
						className="sensor-nickname-input"
						component={TextInput}
					/>
				</div>
				<i
					className="fa fa-pencil-square-o"
					style={{ float: 'right' }}
					aria-hidden="true"
				/>
				<button
					id="form-submit-button"
					className="form-submit-button"
					type="submit"
					disabled={true}
				/>
			</form>
		);
	}
}

export default NicknameForm;
