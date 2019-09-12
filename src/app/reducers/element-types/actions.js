// Action Types
export const SET_SORTED = "SET_SORTED";
export const SET_COMPARING = "SET_COMPARING";
export const SET_SWAPPING = "SET_SWAPPING";
export const SET_SIGNIFICANT = "SET_SIGNIFICANT";

// Action Creators
export const setSorted = (elements) => {
	return {
		type: SET_SORTED,
		payload: {
			elements,
		},
	};
};

export const setComparing = (elements) => {
	return {
		type: SET_COMPARING,
		payload: {
			elements,
		},
	};
};

export const setSwapping = (elements) => {
	return {
		type: SET_SWAPPING,
		payload: {
			elements,
		},
	};
};

export const setSignificant = (element) => {
	return {
		type: SET_SIGNIFICANT,
		payload: {
			element,
		},
	};
};
