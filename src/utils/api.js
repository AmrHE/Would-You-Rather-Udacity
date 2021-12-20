import {
	_getUsers,
	_getQuestions,
	_saveQuestionAnswer,
	_saveQuestion,
} from "./_Data.js";

export function getInitialData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => ({
			users,
			questions,
		})
	);
}
