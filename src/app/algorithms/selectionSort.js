import { setArray } from "../reducers/array/actions";
import {
	addSorted,
	setComparing,
	setSwapping,
	setSignificant,
} from "../reducers/element-types/actions";
import { setRunStatus } from "../reducers/run-status/actions";
import { swap } from "./common";
import { setSorted } from "../reducers/element-types/actions";

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

function handleDispatch(dispatchStack, dispatch, array, speed) {
	if (!dispatchStack.length) {
		setTimeout(() => {
			dispatch(setComparing([]));
			dispatch(setSwapping([]));
			dispatch(setSorted(array.map((element, index) => index)));
			dispatch(setRunStatus(false));
		});
		return;
	}
	let { action, payload } = dispatchStack.shift();
	dispatch(action(payload));

	setTimeout(() => {
		handleDispatch(dispatchStack, dispatch, array, speed);
	}, speed);
}

export default selectionSort;
