import { GET_USERS } from "./types";
import { _getUsers } from "../utils/_Data";

//GET_QUESTIONS ACTION
export const getUsers = () => (dispatch) => {
	_getUsers().then((users) => {
		dispatch({
			type: GET_USERS,
			payload: { users },
		});
	});
};
