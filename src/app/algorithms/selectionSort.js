import { setArray } from "../reducers/array/actions";
import {
	addSorted,
	setComparing,
	setSwapping,
	setSignificant,
} from "../reducers/element-types/actions";
import { swap, handleDispatch } from "./common";

function selectionSort(array, dispatch, speed) {
	console.log("selection");
	let arr = [...array];
	let dispatchStack = [];

	for (let i = 0; i < arr.length; i++) {
		let curMin = arr[i];
		let curMinIndex = i;
		dispatchStack.push({
			action: setSignificant,
			payload: curMinIndex,
		});

		for (let j = i + 1; j < arr.length; j++) {
			// comparing jth element to current minimum
			dispatchStack.push({
				action: setComparing,
				payload: [curMinIndex, j],
			});

			/*console.log(
				`comparing: ${arr[j]} to ${curMin} on the ${j}th iteration`
			); */
			if (arr[j] < curMin) {
				// update minimum value
				// stop visual comparison
				curMin = arr[j];
				curMinIndex = j;
				dispatchStack.push({
					action: [setSignificant, setComparing],
					payload: [curMinIndex, []],
				});

				// stop visual comparison
				// dispatchStack.push({
				// 	action: setComparing,
				// 	payload: [],
				// });
			}
		}

		// remove comparison
		// swapping minimum with first unsorted element in array
		if (curMinIndex != i) {
			dispatchStack.push({
				action: [setSwapping, setComparing],
				payload: [[curMinIndex, i], []],
			});
		}

		swap(arr, curMinIndex, i);

		//update to post-swap array
		dispatchStack.push({
			action: setArray,
			payload: [...arr],
		});

		// unmark significant
		// unmark swapped elements
		// mark ith element as sorted
		dispatchStack.push({
			action: [setSignificant, setSwapping, addSorted],
			payload: [[], [], i],
		});
	}

	handleDispatch(dispatchStack, dispatch, arr, speed);
	return arr;
}

export default selectionSort;
