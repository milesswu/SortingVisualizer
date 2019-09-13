import { connect } from "react-redux";
import OptionBar from "./OptionBar";
import { setArray } from "../reducers/array/actions";
import { setAlgorithm } from "../reducers/algorithm/actions";
import { setSorted } from "../reducers/element-types/actions";
import { setRunStatus } from "../reducers/run-status/actions";
import selectionSort from "../algorithms/selectionSort";
import insertionSort from "../algorithms/insertionSort";
import bubbleSort from "../algorithms/bubbleSort";
import hSort from "../algorithms/hSort";
import shellSort from "../algorithms/shellSort";
import quickSort from "../algorithms/quickSort";
import mergeSort from "../algorithms/mergeSort";
import heapSort from "../algorithms/heapSort";

const mapStateToProps = (state) => ({
	algorithm: state.algorithm,
	array: state.array,
	runStatus: state.runStatus,
});

const mapDispatchToProps = (dispatch) => ({
	generateArray: (length) => {
		let array = [];
		while (array.length < length) {
			array.push(Math.floor(Math.random() * 200) + 10);
		}
		dispatch(setArray(array));
	},
	setAlgorithm: (algorithm) => {
		dispatch(setAlgorithm(algorithm));
	},
	sort: (array, algorithm, speed) => {
		let selectedAlgorithm;

		// identify selected algorithm
		switch (algorithm) {
			case "selectionSort":
				selectedAlgorithm = selectionSort;
				break;
			case "insertionSort":
				selectedAlgorithm = insertionSort;
				break;
			case "bubbleSort":
				selectedAlgorithm = bubbleSort;
				break;
			case "hSort":
				selectedAlgorithm = hSort;
				break;
			case "shellSort ":
				selectedAlgorithm = shellSort;
				break;
			case "quickSort":
				selectedAlgorithm = quickSort;
				break;
			case "mergeSort":
				selectedAlgorithm = mergeSort;
				break;
			case "heapSort":
				selectedAlgorithm = heapSort;
				break;
			default:
				selectedAlgorithm = null;
		}

		// setup start of algorithm
		dispatch(setSorted([]));
		dispatch(setRunStatus(true));
		selectedAlgorithm(array, dispatch, speed);
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OptionBar);
