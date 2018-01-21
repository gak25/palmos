import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TextInput from '../../components/formFields/TextInput';

class NicknameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			nickname: ''
		};
		this.handleNickname = this.handleNickname.bind(this);
		this.validateNickname = this.validateNickname.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (this.validateNickname(this.state.nickname)) {
			this.props.changeNickname(this.state.nickname);
		}
	}

	handleNickname(event) {
		this.validateNickname(event.target.value);
		this.setState({ nickname: event.target.value });
	}

	validateNickname(nickname) {
		if (nickname === '') {
			let newError = {
				nickname: 'Nickname may not be blank'
			};
			this.setState({ errors: Object.assign(this.state.errors, newError) });
			return false;
		} else {
			let errorState = this.state.errors;
			delete errorState.nickname;
			this.setState({ errors: errorState });
			return true;
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.nickname != this.props.nickname) {
			this.setState({ nickname: nextProps.nickname });
		}
	}

	componentWillMount() {
		this.setState({ nickname: this.props.nickname });
	}

	render() {
		let errorDiv;
		let errorItems;
		if (Object.keys(this.state.errors).length > 0) {
			errorItems = Object.values(this.state.errors).map(error => {
				return <div key={error}>{error}</div>;
			});
			errorDiv = <div className="nickname-form-error">{errorItems}</div>;
		}
		return (
			<form className="sensor-nickname-form" onSubmit={this.handleFormSubmit}>
				{errorDiv}
				<TextInput
					nickname={this.state.nickname}
					className="sensor-nickname-input"
					name="nickname"
					autoComplete="off"
					value={this.state.nickname}
					handlerFunction={this.handleNickname}
				/>
				<i
					className="fa fa-pencil-square-o"
					style={{ marginLeft: '5%' }}
					aria-hidden="true"
				/>
				<button
					className="form-submit-button"
					type="submit"
					style={{ visibility: 'hidden' }}
				/>
			</form>
		);
	}
}

export default NicknameForm;
