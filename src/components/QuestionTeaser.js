import React from "react";
import { connect } from "react-redux";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const QuestionTeaser = (props) => {
	//This question is passed from the parent
	const { question, image } = props;
	return (
		<ListGroup.Item>
			<Card>
				<Card.Img
					style={{ height: 160, width: 240 }}
					variant="top"
					src={image}
					// className=
				/>
				<Card.Body>
					<Card.Title>Would You Rather ?</Card.Title>
					<Card.Text>{question.optionOne.text}...</Card.Text>
					<Button
						as={Link}
						to={`/questions/${question.id}`}
						variant="primary"
						// onClick={handleShow}
					>
						View Poll
					</Button>
				</Card.Body>
			</Card>
		</ListGroup.Item>
	);
};

export default connect(null, {})(QuestionTeaser);
