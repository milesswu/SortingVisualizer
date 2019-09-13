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
	let dispatchStack = [];
	let h = Math.floor(arr.length / 2);
	console.log("init array: ", array);

	while (h > 0) {
		console.log("current h: ", h);
		//hsort
		let swapMade = true;
		let i = 0;
		while (swapMade && i < arr.length) {
			swapMade = false;
			console.log("i equals: ", i);
			for (let j = i; j < arr.length - h; j += h) {
				console.log("j equals: ", j);
				// indicate comparison between jth and j+hth elements
				dispatchStack.push({
					action: setComparing,
					payload: [j, j + h],
				});

				console.log(`comparing ${arr[j]} to ${arr[j + h]}`);
				if (arr[j] > arr[j + h]) {
					// swap elements
					dispatchStack.push({
						action: setSwapping,
						payload: [j, j + h],
					});

					console.log("swap");
					swap(arr, j, j + h);
					console.log("swapped array: ", arr);
					swapMade = true;

					// update state array
					dispatchStack.push({
						action: setArray,
						payload: [...arr],
					});
				}
			}
			i++;
		}

		h = Math.floor(h / 2);
	}

	handleDispatch(dispatchStack, dispatch, arr, speed);
	return arr;
}

export default shellSort;
