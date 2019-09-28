//Action Types
export const SET_ARRAY = "SET_ARRAY";

//Action Creators
export const setArray = (newArray) => {
	return {
		type: SET_ARRAY,
		payload: {
			newArray,
		},
	};
};
