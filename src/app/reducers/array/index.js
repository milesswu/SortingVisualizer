import { SET_ARRAY } from "./actions";
const initialState = [];

//Reducers
const array = (state = initialState, action) => {
	switch (action.type) {
		case SET_ARRAY:
			return action.payload.newArray;
		default:
			return state;
	}
};

export default array;
