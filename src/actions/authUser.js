import { SET_AUTHED_USER } from "./types";

export const setAuthedUser = (id) => {
	return {
		type: SET_AUTHED_USER,
		id,
	};
};
