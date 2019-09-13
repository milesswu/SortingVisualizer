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

		for (let j = i; j < arr.length; j++) {
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
				curMin = arr[j];
				curMinIndex = j;
				dispatchStack.push({
					action: setSignificant,
					payload: curMinIndex,
				});
			}
		}

		//swapping minimum with first unsorted element in array
		dispatchStack.push({
			action: setSwapping,
			payload: [curMinIndex, i],
		});

		swap(arr, curMinIndex, i);

		//update to post-swap array
		dispatchStack.push({
			action: setArray,
			payload: [...arr],
		});

		//mark ith element as sorted
		dispatchStack.push({
			action: addSorted,
			payload: i,
		});
	}

	handleDispatch(dispatchStack, dispatch, arr, speed);
	return arr;
}

export default selectionSort;
