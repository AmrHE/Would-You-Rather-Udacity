import { GET_USERS } from "./types";

//GET_QUESTIONS ACTION
export const getUsers = (users) => {
	return {
		type: GET_USERS,
		users,
	};
};
