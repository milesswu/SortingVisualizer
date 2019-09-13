import {
	setSorted,
	setComparing,
	setSwapping,
} from "../reducers/element-types/actions";
import { setRunStatus } from "../reducers/run-status/actions";

export const swap = (arr, index1, index2) => {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};

export function handleDispatch(dispatchStack, dispatch, array, speed) {
	if (!dispatchStack.length) {
		setTimeout(() => {
			console.log("done");
			dispatch(setComparing([]));
			dispatch(setSwapping([]));
			console.log(array);
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
