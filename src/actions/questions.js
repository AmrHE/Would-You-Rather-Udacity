import { GET_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from "./types";
import {
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer,
} from "../utils/_Data";

//GET_QUESTIONS ACTION
export const getQuestions = () => (dispatch) => {
	_getQuestions().then((questions) => {
		dispatch({
			type: GET_QUESTIONS,
			payload: { questions },
		});
	});
};

//SAVE_QUESTION_ACTION
export const saveQuestion =
	({ optionOneText, optionTwoText, author }) =>
	(dispatch) => {
		_saveQuestion({ optionOneText, optionTwoText, author }).then(
			(formattedQuestion) => {
				dispatch({
					type: SAVE_QUESTION,
					payload: { formattedQuestion },
				});
			}
		);
	};

//SAVE_ANSWER_ACTION
export const saveAnswer =
	({ authedUser, qid, answer }) =>
	async (dispatch) => {
		await _saveQuestionAnswer({ authedUser, qid, answer });
		dispatch({
			type: SAVE_ANSWER,
			payload: { authedUser, qid, answer },
		});
	};
