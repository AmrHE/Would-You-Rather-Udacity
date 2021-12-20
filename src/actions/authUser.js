import { SET_AUTHED_USER } from "./types";

export const setAuthedUser = (user) => {
	return {
		type: SET_AUTHED_USER,
		payload: { user },
	};
};
