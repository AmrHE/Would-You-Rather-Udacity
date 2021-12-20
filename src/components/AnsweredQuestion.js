import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { connect } from "react-redux";

const AnsweredQuestion = (props) => {
	const { image, question, authedUser } = props;
	console.log("AnsweredQuestion PROPS: ", props);

	const optionOneVotes = question.optionOne.votes.length;
	const optionTwoVotes = question.optionTwo.votes.length;

	const optionOnePercentage = parseInt(
		(optionOneVotes * 100) / (optionOneVotes + optionTwoVotes)
	);
	const optionTwoPercentage = parseInt(
		(optionTwoVotes * 100) / (optionOneVotes + optionTwoVotes)
	);

	const answerOfUser = authedUser.answers[question.id];

	return (
		<div className="answered-question_container">
			<Card className="answered-question_card">
				<Card.Img
					style={{ height: 160, width: 240 }}
					variant="top"
					src={image}
				/>
				<Card.Body>
					<Card.Title>Would You Rather ?</Card.Title>
					<Card.Text>
						{answerOfUser === "optionOne" ? (
							<span>
								<b>Your Vote:</b>
							</span>
						) : (
							<></>
						)}
						{question.optionOne.text}
					</Card.Text>
					<ProgressBar
						now={optionOnePercentage}
						label={`${optionOnePercentage}%`}
					/>

					<Card.Text>
						{answerOfUser === "optionTwo" ? (
							<span>
								<b>Your Vote: </b>
							</span>
						) : (
							<></>
						)}
						{question.optionTwo.text}
					</Card.Text>
					<ProgressBar
						now={optionTwoPercentage}
						label={`${optionTwoPercentage}%`}
					/>
					{answerOfUser === "optionTwo" ? <span>Your Vote</span> : <></>}
				</Card.Body>
			</Card>
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

export default connect(mapStateToProps, {})(AnsweredQuestion);
