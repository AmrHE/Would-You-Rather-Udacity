import React from "react";
import { ListGroup, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import QuestionTeaser from "../QuestionTeaser";
// import ControlledTabs from "./ControlledTabs";
// import FullWidthTabs from "./ControlledTabs";
// import Tabs from "./Tabs";
import "./home.css";

const Home = (props) => {
	const { users, questions, authedUser } = props;

	const sortedQuestions = Object.values(questions).sort(
		(a, b) => b.timestamp - a.timestamp
	);
	console.log(sortedQuestions);

	return (
		<div className="questions-list_container">
			{/*THE WELL STYLED BUTTONS OF THE HOME PAGE*/}
			{/* <div className="home-container">
				<div className="btns-wrapper">
					<button className="answered-btn">Answered</button>
					</div>
					<button className="unanswered-btn">Unanswered</button>
				<ListGroup>{questions.filter}</ListGroup>
			</div> */}
			<Tabs
				defaultActiveKey="unanswered"
				id="uncontrolled-tab-example"
				className="btns-wrapper"
			>
				<Tab
					eventKey="unanswered"
					title="Unanswered questions"
					className="unanswered-btn"
				>
					<ListGroup className="questions-list">
						{Object.values(sortedQuestions)
							.filter((question) => !authedUser.answers[question.id])
							.map((question) => (
								<QuestionTeaser
									key={question.id}
									question={question}
									image={users[question.author].avatarURL}
									className="question-teaser_card"
								></QuestionTeaser>
							))}
					</ListGroup>
				</Tab>
				<Tab
					eventKey="answered"
					title="Answered questions"
					className="answered-btn"
				>
					<ListGroup className="questions-list">
						{Object.values(sortedQuestions)
							.filter((question) => authedUser.answers[question.id])
							.map((question) => (
								<QuestionTeaser
									key={question.id}
									question={question}
									image={users[question.author].avatarURL}
									className="question-teaser_card"
								></QuestionTeaser>
							))}
					</ListGroup>
				</Tab>
			</Tabs>
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

export default connect(mapStateToProps)(Home);
