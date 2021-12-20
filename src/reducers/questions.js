//REDUCERS ARE PURE FUNCTIONS
import { GET_QUESTIONS, SAVE_ANSWER, SAVE_QUESTION } from "../actions/types";

const initialState = {};

export default function questions(questions = initialState, action) {
	switch (action.type) {
		case GET_QUESTIONS:
			return action.payload.questions;

		case SAVE_QUESTION:
			//The formattedQuestion is the newQuestion that has been formatted through the function in _Data file
			const { formattedQuestion } = action.payload;
			console.log("FORMATTED_QUESTION: ", formattedQuestion);
			return {
				...questions,
				[formattedQuestion.id]: formattedQuestion,
			};

		case SAVE_ANSWER:
			const { qid, answer, authedUser } = action.payload;
			return {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser]),
					},
				},
			};

		default:
			return questions;
	}
}
