import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import { Form, Button } from "react-bootstrap";
import { setAuthedUser } from "../../../actions/authUser";
import { getUsers } from "../../../actions/users";
import "./form.css";

class LoginForm extends Component {
	state = {
		value: "",
		// user: -1,
	};

	// componentDidMount() {
	// 	this.props.getUsers();
	// }

	handleOnChange = (e) => {
		this.setState({ value: e.target.value });
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		const authedUser = this.state.value;

		console.log(authedUser);

		this.props.setAuthedUser(authedUser);

		// if (this.props.users) {
		// 	let user =
		// 		this.state.user > -1
		// 			? this.state.user
		// 			: this.props.login(this.props.users.find((x) => x.id === user));
		// } else {
		// 	alert("no users found");
		// }
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
			<Form className="form" onSubmit={this.handleOnSubmit}>
				<Header as="h2" className="header">
					Login to Play 😉
				</Header>
				<Form.Group className="container">
					<Form.Control
						className="input"
						as="select"
						size="lg"
						name="user"
						onChange={this.handleOnChange}
						placeholder="select User"
						defaultValue="select User"
					>
						{this.props.users.map((user) => (
							<option key={user.id} value={user.id}>
								{user.name}
							</option>
						))}
					</Form.Control>
					<Button
						className="button"
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
