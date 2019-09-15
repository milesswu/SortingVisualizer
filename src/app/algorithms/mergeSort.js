import { setArray } from "../reducers/array/actions";
import {
	setSorted,
	setComparing,
	setSwapping,
	setSignificant,
} from "../reducers/element-types/actions";
import { swap } from "./common";

function mergeSort(array, dispatch, speed) {
	console.log("merge");
	let arr = [...array];
	let dispatchStack = [];

	mergeSortHelper(arr, 0, array.length - 1, dispatchStack);
}

function mergeSortHelper(array, start, end, dispatchStack) {
	if (start >= end) {
		return;
	}
	let mid = Math.floor((start + end) / 2);
	// set middle point to be significant
	dispatchStack.push({
		action: setSignificant,
		payload: mid,
	});

	// sort left half of array
	mergeSortHelper(array, start, mid - 1, dispatchStack);

	// sort right half of array
	mergeSortHelper(array, mid, end, dispatchStack);

	// merge two halves in a sorted manner
	merge(array, start, mid, end, dispatchStack);
}

function merge(array, start, mid, end, dispatchStack) {
	// make two subarrays, keep track of current position in each
	let left = {
		arr: array.slice(start, mid),
		curIndex: 0,
		stateArrayIndex: start,
	};
	console.log("left: ", left);
	let right = {
		arr: array.slice(mid, end),
		curIndex: 0,
		stateArrayIndex: mid,
	};
	console.log("right: ", right);

	let combined = [];

	while (
		left.curIndex < left.arr.length &&
		right.curIndex < right.arr.length
	) {
		let lowerSide = null;

		// indicate comparison between elements from left and right halves
		dispatchStack.push({
			action: setComparing,
			payload: [left.stateArrayIndex, right.stateArrayIndex],
		});
		if (left.arr[left.curIndex] <= right.arr[right.curIndex]) {
			lowerSide = left;
		} else {
			lowerSide = right;
		}

		combined.push(lowerSide.arr[lowerSide.curIndex]);
	}
}

export default mergeSort;
