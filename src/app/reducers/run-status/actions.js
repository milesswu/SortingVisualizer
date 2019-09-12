// Action Types
export const SET_RUN_STATUS = "SET_RUN_STATUS";

// Action Creators
export const setRunStatus = (status) => {
	return {
		type: SET_RUN_STATUS,
		payload: {
			status,
		},
	};
};
