import { SET_ARRAY, SWAP_ELEMENTS } from "./actions";
const initialState = [];

//Helper functions
const swap = (arr, index1, index2) => {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};

//Reducers
const array = (state = initialState, action) => {
	switch (action.type) {
		case SET_ARRAY:
			return action.payload.newArray;
		case SWAP_ELEMENTS:
			let tempArr = [...state];
			swap(tempArr, action.payload.index1, action.payload.index2);
			return tempArr;
		default:
			return state;
	}
};

export default array;
