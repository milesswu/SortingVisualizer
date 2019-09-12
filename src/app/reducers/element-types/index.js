import {
	SET_SORTED,
	SET_COMPARING,
	SET_SWAPPING,
	SET_SIGNIFICANT,
} from "./actions";
import { combineReducers } from "redux";
const initialSorted = [];
const initialComparing = [];
const intialSwapping = [];
const initialSignificant = null;

// Reducers for each element type

//Green
const sorted = (state = initialSorted, action) => {
	switch (action.type) {
		case SET_SORTED:
			return action.payload.elements;
		default:
			return state;
	}
};

//Yellow
const comparing = (state = initialComparing, action) => {
	switch (action.type) {
		case SET_COMPARING:
			return action.payload.elements;
		default:
			return state;
	}
};

//Red
const swapping = (state = intialSwapping, action) => {
	switch (action.type) {
		case SET_SWAPPING:
			return action.payload.elements;
		default:
			return state;
	}
};

//Magenta
const significant = (state = initialSignificant, action) => {
	switch (action.type) {
		case SET_SIGNIFICANT:
			return action.payload.element;
		default:
			return state;
	}
};

const elements = combineReducers({
	sorted,
	comparing,
	swapping,
	significant,
});

export default elements;
