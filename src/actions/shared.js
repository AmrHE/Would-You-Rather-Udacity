import { getInitialData } from "../utils/api";
import { getQuestions } from "./questions";
import { getUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

//In This action we use this Higher order function pattern because getInitialData is async function
export const handleInitialData = () => {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(getQuestions(questions));
			dispatch(getUsers(users));
			dispatch(hideLoading());
		});
	};
};
