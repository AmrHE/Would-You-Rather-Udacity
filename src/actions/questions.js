import { GET_QUESTIONS } from "./types";

//GET_QUESTIONS ACTION
export const getQuestions = (questions) => {
	return {
		type: GET_QUESTIONS,
		questions,
	};
};
