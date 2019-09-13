import { setArray } from "../reducers/array/actions";
import {
	setComparing,
	setSwapping,
	addSorted,
} from "../reducers/element-types/actions";
import { swap, handleDispatch } from "./common";

function shellSort(array, dispatch, speed) {
	console.log("shell");
	let arr = [...array];
}

export default shellSort;
