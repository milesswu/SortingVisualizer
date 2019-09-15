import { setArray } from "../reducers/array/actions";
import {
	setComparing,
	setSwapping,
	addSorted,
} from "../reducers/element-types/actions";
import { swap, handleDispatch } from "./common";

function bubbleSort(array, dispatch, speed) {
	console.log("bubble");
	let arr = [...array];
	let dispatchStack = [];
	let swapMade = true;
	let numSorted = 0;

	while (swapMade) {
		swapMade = false;
		for (let i = 0; i < arr.length - 1 - numSorted; i++) {
			// compare procedurally along the array
			dispatchStack.push({
				action: [setComparing, setSwapping],
				payload: [[i, i + 1], []],
			});

			if (arr[i] > arr[i + 1]) {
				// swap adjacent elements
				dispatchStack.push({
					action: [setSwapping, setComparing],
					payload: [[i, i + 1], []],
				});

				swap(arr, i, i + 1);

				// update state array
				dispatchStack.push({
					action: setArray,
					payload: [...arr],
				});

				swapMade = true;
			}
		}

		// indicate last element is now sorted (maximum in subarray)
		dispatchStack.push({
			action: [addSorted, setSwapping],
			payload: [arr.length - 1 - numSorted, []],
		});
		numSorted++;
	}

	handleDispatch(dispatchStack, dispatch, arr, speed);
}

export default bubbleSort;
