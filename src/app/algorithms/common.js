import {
	setSorted,
	setComparing,
	setSwapping,
	setSignificant,
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
			dispatch(setSignificant(null));
			console.log(array);
			dispatch(setSorted(array.map((element, index) => index)));
			dispatch(setRunStatus(false));
		});
		return;
	}
	let { action, payload } = dispatchStack.shift();
	// TODO: Refactor all dispatchStack code so that this conditional is not necessary
	// console.log(typeof action, action);
	if (typeof action == "object") {
		for (let i = 0; i < action.length; i++) {
			dispatch(action[i](payload[i]));
		}
	} else {
		dispatch(action(payload));
	}

	setTimeout(() => {
		handleDispatch(dispatchStack, dispatch, array, speed);
	}, speed);
}
