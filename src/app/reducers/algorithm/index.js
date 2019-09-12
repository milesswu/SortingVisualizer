import { SET_ALGORITHM } from "./actions";
const initialState = "";

const algorithm = (state = initialState, action) => {
	switch (action.type) {
		case SET_ALGORITHM:
			return action.payload.algorithm;
		default:
			return state;
	}
};

export default algorithm;
