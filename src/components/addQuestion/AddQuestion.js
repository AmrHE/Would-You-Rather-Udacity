import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { saveQuestion } from "../../actions/questions";

class AddQuestion extends Component {
	state = {
		optionOne: "",
		optionTwo: "",
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { saveQuestion, authedUser } = this.props;
		const { optionOne, optionTwo } = this.state;
		const author = authedUser.id;

		console.log("submit logs: ", optionOne, optionTwo);

		const optionOneText = optionOne;
		const optionTwoText = optionTwo;

		if (optionOne !== "" && optionTwo !== "") {
			saveQuestion({ optionOneText, optionTwoText, author });
		}
	};
	render() {
		// const { authedUser, saveQuestion, users, questions } = this.props;
		const { optionOne, optionTwo } = this.state;

		return (
			<div className="addQuestion-container">
				<Card className="addQuestions-wrapper">
					<Card.Header>
						<b>Add New Question</b>
					</Card.Header>

					<Form
						className="addQuestion-form_wrapper"
						onSubmit={this.handleSubmit}
					>
						<Card.Title>Would You Rather...</Card.Title>
						<Form.Group className="" controlId="formBasicEmail">
							{/* <Form.Label>Option One</Form.Label> */}
							<Form.Control
								type="text"
								placeholder="option one..."
								className="option option1"
								name="optionOne"
								onChange={this.handleChange}
							/>
							<div className="card-text">
								<Card.Text>
									<b>OR</b>
								</Card.Text>
							</div>
						</Form.Group>

						<Form.Group className="" controlId="formBasicPassword">
							{/* <Form.Label>Option Two</Form.Label> */}
							<Form.Control
								type="text"
								placeholder="option two..."
								className="option option2"
								name="optionTwo"
								onChange={this.handleChange}
							/>
						</Form.Group>

						<Button
							disabled={optionOne === "" || optionTwo === ""}
							variant="secondary"
							type="submit"
							className="addQuestion-submit_btn"
						>
							Submit
						</Button>
					</Form>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authedUser: state.users[state.authUser],
		questions: state.questions,
		users: state.users,
	};
};

export default connect(mapStateToProps, { saveQuestion })(AddQuestion);
