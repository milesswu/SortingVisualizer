// Action Types
export const SET_SPEED = "SET_SPEED";

// Action Creators
export const setSpeed = (speed) => {
	return {
		type: SET_SPEED,
		payload: {
			speed,
		},
	};
};
