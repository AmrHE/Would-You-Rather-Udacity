import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import { Form, Button } from "react-bootstrap";
import { setAuthedUser } from "../../actions/authUser";
import { getUsers } from "../../actions/users";

class LoginForm extends Component {
	state = {
		value: "",
	};

	handleOnChange = (e) => {
		this.setState({ value: e.target.value });
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		const authedUser = this.state.value;
		this.props.setAuthedUser(authedUser);
	};

	dropdownMenuOptions = () => {
		const { users } = this.props;
		return users.map((user) => ({
			key: user.id,
			text: user.name,
			value: user.id,
			image: { avatar: true, src: user.avatarURL },
		}));
	};

	render() {
		const { value } = this.state;
		return (
			<Form className="login-form" onSubmit={this.handleOnSubmit}>
				<Header as="h2" className="login-form-header">
					Login to start 😉
				</Header>
				<Form.Group className="login-container">
					<Form.Control
						className="login-input"
						as="select"
						size="lg"
						name="user"
						onChange={this.handleOnChange}
						placeholder="select User"
						defaultValue="select User"
					>
						<option value="">Choose a User</option>
						{this.props.users.map((user) => (
							<option key={user.id} value={user.id}>
								{user.name}
							</option>
						))}
					</Form.Control>
					<Button
						className="login-button"
						type="submit"
						disabled={value === "" ? true : false}
					>
						Login
					</Button>
				</Form.Group>
			</Form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: Object.values(state.users),
	};
};

export default connect(mapStateToProps, { setAuthedUser, getUsers })(LoginForm);
