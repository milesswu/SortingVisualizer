import { setArray } from "../reducers/array/actions";
import {
	setComparing,
	setSwapping,
	setSignificant,
	addSorted,
} from "../reducers/element-types/actions";
import { swap, handleDispatch } from "./common";

function quickSort(array, dispatch, speed) {
	console.log("quick");
	let arr = [...array];
	let dispatchStack = [];
	let start = 0;
	let end = array.length - 1;
	quickSortHelper(arr, start, end, dispatchStack);

	handleDispatch(dispatchStack, dispatch, arr, speed);
	return arr;
}

function quickSortHelper(array, start, end, dispatchStack) {
	if (start >= end) {
		dispatchStack.push({
			action: [addSorted],
			payload: [start],
		});
		return;
	}

	let low = start;
	let high = end;
	high = partition(array, low, high, dispatchStack);
	// the pivot used in the partition is now sorted
	dispatchStack.push({
		action: [addSorted, setSwapping, setComparing],
		payload: [high, [], []],
	});
	// console.log("after partition array: ", array.slice(start, end + 1));

	// sort the left side of the array
	quickSortHelper(array, start, high - 1, dispatchStack);

	// sort the right side of the array
	quickSortHelper(array, high + 1, end, dispatchStack);
}

function partition(array, low, high, dispatchStack) {
	let pivot = array[low];
	let pivotIndex = low;

	// console.log("current pivot: ", pivot);
	// indicate the pivot to be significant
	dispatchStack.push({
		action: setSignificant,
		payload: pivotIndex,
	});
	low++;
	dispatchStack.push({
		action: setComparing,
		payload: [low, high],
	});

	while (high >= low) {
		if (array[high] < pivot && array[low] > pivot) {
			dispatchStack.push({
				action: [setSwapping, setComparing],
				payload: [[low, high], []],
			});

			swap(array, low, high);

			// update state array
			dispatchStack.push({
				action: [setArray, setSwapping],
				payload: [[...array], []],
			});
		}

		if (array[high] >= pivot) {
			high--;
		}
		if (array[low] <= pivot) {
			low++;
		}
		if (high >= low) {
			dispatchStack.push({
				action: [setComparing, setSwapping],
				payload: [[low, high], []],
			});
		}
	}

	// swap pivot with latest element that is <=
	dispatchStack.push({
		action: [setSwapping, setComparing],
		payload: [[pivotIndex, high], []],
	});
	swap(array, pivotIndex, high);

	// update state array
	dispatchStack.push({
		action: setArray,
		payload: [...array],
	});

	pivotIndex = high;
	return pivotIndex;
}

export default quickSort;
