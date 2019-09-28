import { combineReducers } from "redux";
import array from "./app/reducers/array";
import algorithm from "./app/reducers/algorithm";
import elements from "./app/reducers/element-types";
import runStatus from "./app/reducers/run-status";
import speed from "./app/reducers/speed";

const rootReducer = combineReducers({
	algorithm,
	array,
	elements,
	runStatus,
	speed,
});

export default rootReducer;
