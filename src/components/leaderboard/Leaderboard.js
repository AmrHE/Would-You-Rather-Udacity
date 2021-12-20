import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GiTrophyCup } from "react-icons/gi";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Leaderboard = (props) => {
	//destructuring props
	const { users } = props;

	//trophy classNames Array
	const trophyColor = ["gold", "silver", "bronze"];

	//Modify the users data as per component needs
	const playersData = Object.values(users).map((user) => ({
		id: user.id,
		avatarURL: user.avatarURL,
		name: user.name,
		answers: Object.keys(user.answers).length,
		questions: user.questions.length,
		total: Object.keys(user.answers).length + user.questions.length,
	}));

	//Sort the modified users data
	const sortedPlayers = playersData.sort((a, b) => {
		return b.total - a.total;
	});

	return (
		<>
			{sortedPlayers.map((user, index) => (
				<Container className="leaderboard-container" key={user.id}>
					<Row className="leaderboard-card">
						<GiTrophyCup className={`trophy-icon ${trophyColor[index]}`} />
						<Col className="leaderboard-card_img leaderboard-card_section">
							<Row className="leaderboard-card_img-name">
								<b>{user.name}</b>
							</Row>
							<Row>
								<img
									className="leaderboard-card_img-image"
									src={user.avatarURL}
									alt="player's avatar"
								/>
							</Row>
						</Col>
						<Col
							className="leaderboard-card_user leaderboard-card_section"
							xs={6}
						>
							<Row className="leaderboard-card_user--data first">
								<Col>Answered Question</Col>
								<Col xs lg="2">
									{user.answers}
								</Col>
							</Row>

							<Row className="leaderboard-card_user--data">
								<Col>Owned Question</Col>
								<Col xs lg="2">
									{user.questions}
								</Col>
							</Row>
						</Col>
						<Col className="leaderboard-card_score leaderboard-card_section">
							<Row className="leaderboard-card_score-data first">Score</Row>
							<Row className="leaderboard-card_score-data">{user.total}</Row>
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		questions: state.questions,
		users: state.users,
		authedUser: state.users[state.authUser],
	};
};

export default connect(mapStateToProps)(Leaderboard);
