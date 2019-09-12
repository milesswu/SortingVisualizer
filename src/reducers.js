import { combineReducers } from "redux";
import array from "./app/reducers/array";
import algorithm from "./app/reducers/algorithm";
import elements from "./app/reducers/element-types";
import runStatus from "./app/reducers/run-status";

const rootReducer = combineReducers({
	algorithm,
	array,
	elements,
	runStatus,
});

export default rootReducer;
