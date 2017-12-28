import React, { Component } from 'react';
import Dashboard from './Dashboard';
import NavTop from './NavTop';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: {}
		};
		this.loadUserData = this.loadUserData.bind(this);
	}

	loadUserData() {
		fetch('/api/v1/users', {
			credentials: 'same-origin',
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => {
				if (response.ok) {
					return response;
				}
			})
			.then(response => response.json())
			.then(body => {
				this.setState({
					currentUser: body.current_user
				});
			});
	}

	componentDidMount() {
		this.loadUserData();
	}

	render() {
		return (
			<div>
				<NavTop currentUser={this.state.currentUser} />
				<Dashboard currentUser={this.state.currentUser} />
			</div>
		);
	}
}

export default App;
