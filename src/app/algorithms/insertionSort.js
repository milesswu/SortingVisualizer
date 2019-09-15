import { setArray } from "../reducers/array/actions";
import {
	setComparing,
	setSwapping,
	setSignificant,
} from "../reducers/element-types/actions";
import { swap, handleDispatch } from "./common";

function insertionSort(array, dispatch, speed) {
	console.log("insertion");
	let arr = [...array];
	let dispatchStack = [];

	for (let i = 1; i < arr.length; i++) {
		let curElement = arr[i];
		let curElementIndex = i;

		// set last element in subarray as significant
		dispatchStack.push({
			action: [setSignificant, setComparing, setSwapping],
			payload: [i, [], []],
		});

		// compare all previous elements to find correct placement
		let j = i - 1;
		while (arr[j] > curElement && j >= 0) {
			// indicate current comparison pair
			// remove visual swapping
			dispatchStack.push({
				action: [setComparing, setSwapping],
				payload: [[curElementIndex, j], []],
			});

			// swapping jth element with element of interest
			// remove visual comparison
			dispatchStack.push({
				action: [setSwapping, setComparing],
				payload: [[curElementIndex, j], []],
			});
			swap(arr, curElementIndex, j);
			curElementIndex = j;

			// update state array
			dispatchStack.push({
				action: setArray,
				payload: [...arr],
			});

			j--;
		}
		// indicate final comparison (no swap after this)
		console.log(curElementIndex, j);
		let finalAction = {
			action: [setSwapping],
			payload: [[]],
		};
		if (curElementIndex != j && j >= 0) {
			finalAction = {
				action: [setComparing, setSwapping],
				payload: [[curElementIndex, j], []],
			};
		}
		dispatchStack.push(finalAction);
	}

	handleDispatch(dispatchStack, dispatch, arr, speed);
	return arr;
}

export default insertionSort;
