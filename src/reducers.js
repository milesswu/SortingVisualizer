import { combineReducers } from "redux";
import array from "./app/reducers/array";

const rootReducer = combineReducers({
	array: array,
});

export default rootReducer;
