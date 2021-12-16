//REDUCERS ARE PURE FUNCTIONS
import { GET_QUESTIONS } from "../actions/types";

export default function questions(state = {}, action) {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				...action.questions,
			};

		default:
			return state;
	}
}
