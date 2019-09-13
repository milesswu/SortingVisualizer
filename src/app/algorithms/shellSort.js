import { setArray } from "../reducers/array/actions";
import {
	addSorted,
	setComparing,
	setSwapping,
} from "../reducers/element-types/actions";
import { swap, handleDispatch } from "./common";

function shellSort(array, dispatch, speed) {
	console.log("shell");
	let arr = [...array];
	let dispatchStack = [];
	let h = Math.floor(arr.length / 2);
	// console.log("init array: ", array);

	while (h > 0) {
		console.log("current h: ", h);
		//hsort
		for (let i = 0; i < h; i++) {
			let swapMade = true;
			let numSorted = 0;

			while (swapMade) {
				swapMade = false;
				for (let j = i; j < arr.length - h; j += h) {
					// compare procedurally along the array
					dispatchStack.push({
						action: setComparing,
						payload: [j, j + h],
					});

					if (arr[j] > arr[j + h]) {
						// swap adjacent elements
						dispatchStack.push({
							action: setSwapping,
							payload: [j, j + h],
						});

						swap(arr, j, j + h);

						// update state array
						dispatchStack.push({
							action: setArray,
							payload: [...arr],
						});

						swapMade = true;
					}
				}

				// indicate last element is now sorted (maximum in subarray)
				if (h == 1) {
					dispatchStack.push({
						action: addSorted,
						payload: arr.length - 1 - numSorted,
					});
				}
				numSorted++;
			}
		}

		h = Math.floor(h / 2);
	}

	handleDispatch(dispatchStack, dispatch, arr, speed);
	return arr;
}

export default shellSort;
