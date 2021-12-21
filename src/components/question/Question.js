import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AnsweredQuestion from "../AnsweredQuestion";
import UnansweredQuestion from "../UnansweredQuestion";

const Question = (props) => {
	const { questions, users, authedUser } = props;
	// console.log("QUESTION PROPS: ", props);
	//This is how we get the id from the query params
	const qid = props.match.params.id;
	// console.log(qid);
	const question = questions[qid];

	if (!question) return <Redirect to="/404" />;

	const answered = authedUser.answers[qid];
	const IMG = users[question.author].avatarURL;

	return answered ? (
		<AnsweredQuestion image={IMG} question={question} />
	) : (
		<UnansweredQuestion image={IMG} question={question} />
	);
};

const mapStateToProps = (state) => {
	return {
		questions: state.questions,
		users: state.users,
		authedUser: state.users[state.authUser],
	};
};

export default connect(mapStateToProps)(Question);
