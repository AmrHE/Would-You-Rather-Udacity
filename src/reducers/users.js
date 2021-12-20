//REDUCERS ARE PURE FUNCTIONS
import { GET_USERS, SAVE_ANSWER, SAVE_QUESTION } from "../actions/types";

const initialState = {};

export default function users(users = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return action.payload.users;

		case SAVE_QUESTION:
			const { formattedQuestion } = action.payload;
			const authedUser = formattedQuestion.author;
			return {
				...users,
				[authedUser]: {
					...users[authedUser],
					questions: users[authedUser].questions.concat([formattedQuestion.id]),
				},
			};

		case SAVE_ANSWER: {
			const { qid, answer, authedUser } = action.payload;
			return {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer,
					},
				},
			};
		}

		default:
			return users;
	}
}
