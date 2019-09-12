import { SET_RUN_STATUS } from "./actions";
const initialState = false;

// Reducers
const runStatus = (state = initialState, action) => {
	switch (action.type) {
		case SET_RUN_STATUS:
			return action.payload.status;
		default:
			return state;
	}
};

export default runStatus;
