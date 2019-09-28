import { SET_SPEED } from "./actions";
const initialState = 0;

const speed = (state = initialState, action) => {
	switch (action.type) {
		case SET_SPEED:
			return action.payload.speed;
		default:
			return state;
	}
};

export default speed;
