// Action Types
export const SET_ALGORITHM = "SET_ALGORITHM";

// Action Creators
export const setAlgorithm = (algorithm) => {
	return {
		type: SET_ALGORITHM,
		payload: {
			algorithm,
		},
	};
};
