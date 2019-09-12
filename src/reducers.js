import { combineReducers } from "redux";
import array from "./app/reducers/array";
import algorithm from "./app/reducers/algorithm";
import elements from "./app/reducers/element-types";

const rootReducer = combineReducers({
	array,
	algorithm,
	elements,
});

export default rootReducer;
