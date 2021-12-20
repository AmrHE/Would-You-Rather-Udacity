import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Button, Form } from "react-bootstrap";
import { saveAnswer } from "../actions/questions";

const UnansweredQuestion = (props) => {
	const [answer, setAnswer] = useState("");
	//These props are passed from the parent
	const { question, image, authedUser } = props;
	// console.log(answer);
	// console.log(question);
	// console.log(authedUser);
	// console.log(props);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		props.saveAnswer({
			authedUser: authedUser.id,
			qid: question.id,
			answer: answer,
		});
	};

	return (
		<div className="unanswered-question_container">
			{/* <ListGroup.Item> */}
			<Card className="unanswered-question_card">
				<Card.Img
					style={{ height: 160, width: 240 }}
					variant="top"
					src={image}
				/>
				<Card.Body>
					<Card.Title>Would You Rather ?</Card.Title>
					<Form onSubmit={handleOnSubmit}>
						<Form.Check
							checked={answer === "optionOne"}
							type="radio"
							onChange={() => setAnswer("optionOne")}
							label={question.optionOne.text}
						/>
						<Form.Check
							checked={answer === "optionTwo"}
							type="radio"
							onChange={() => setAnswer("optionTwo")}
							label={question.optionTwo.text}
						/>

						<Button type="submit" variant="primary" disabled={!answer}>
							Submit Answer
						</Button>
					</Form>
				</Card.Body>
			</Card>
			{/* </ListGroup.Item> */}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		questions: state.questions,
		users: state.users,
		authedUser: state.users[state.authUser],
	};
};

export default connect(mapStateToProps, { saveAnswer })(UnansweredQuestion);
