import React, { useEffect } from "react";
import "./OptionBar.css";
function OptionBar(props) {
	// Get State Data
	const { algorithm, array, runStatus } = props;

	// Get Dispatch Methods
	const { generateArray, setAlgorithm, sort } = props;

	//Initialize array
	useEffect(() => {
		generateArray(50);
	}, [generateArray]);

	const selectAlgorithm = (event) => {
		console.log(event.target.value);
		setAlgorithm(event.target.value);
	};

	//Render logic
	return (
		<div id="option-bar">
			<div className="row">
				{/* generate new array */}
				<div className="col">
					<button
						id="generateArray"
						onClick={() => generateArray(array.length)}
					>
						Generate New Array
					</button>
				</div>

				{/* change array size and speed of visualizer */}
				<div className="col" id="sliders">
					<label htmlFor="changeSize">change size of array:</label>
					<input type="range" name="" id="changeSize" />
					<label htmlFor="changeSpeed">
						change speed of algorithm:
					</label>
					<input type="range" name="" id="changeSpeed" />
				</div>

				{/* choose sorting algorithm */}
				<div className="col">
					<label htmlFor="algorithm">select sorting algorithm:</label>
					<select
						name="algorithm"
						id="algorithm"
						value={algorithm}
						onChange={selectAlgorithm}
					>
						<option value="">--</option>
						<option value="selectionSort">Selection Sort</option>
						<option value="insertionSort">Insertion Sort</option>
						<option value="bubbleSort">Bubble Sort</option>
						<option value="hSort">H Sort</option>
						<option value="quickSort">QuickSort</option>
						<option value="mergeSort">Merge Sort</option>
						<option value="heapSort">Heap Sort</option>
					</select>
				</div>

				{/* start sorting */}
				<div className="col">
					<button
						onClick={() => sort(array, algorithm, 1)}
						disabled={runStatus || algorithm === ""}
					>
						Sort
					</button>
				</div>
			</div>
		</div>
	);
}

export default OptionBar;
