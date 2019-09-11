//Action Types
export const SET_ARRAY = "SET_ARRAY";
export const SWAP_ELEMENTS = "SWAP_ELEMENTS";

//Action Creators
export const setArray = (newArray) => {
	return {
		type: SET_ARRAY,
		payload: {
			newArray,
		},
	};
};

export const swapArrayElements = (index1, index2) => {
	return {
		type: SWAP_ELEMENTS,
		payload: {
			index1,
			index2,
		},
	};
};
