import React, { useEffect } from "react";
import "./OptionBar.css";
function OptionBar(props) {
	// Get State Data
	const { algorithm, array, runStatus, speed } = props;

	// Get Dispatch Methods
	const { generateArray, setAlgorithm, setSpeed, sort } = props;

	//Initialize array
	const defaultArraySize = 50;
	useEffect(() => {
		generateArray(defaultArraySize);
	}, [generateArray]);

	const changeSize = (event) => {
		generateArray(parseInt(event.target.value) + 3);
	};

	const selectAlgorithm = (event) => {
		console.log(event.target.value);
		setAlgorithm(event.target.value);
	};

	// Handle Algorithm Speed
	const defaultSpeed = 250;
	useEffect(() => {
		setSpeed(defaultSpeed);
	}, [setSpeed]);
	const minSpeed = 500;
	const changeSpeed = (event) => {
		setSpeed(minSpeed - parseInt(event.target.value));
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
						disabled={runStatus}
					>
						Generate New Array
					</button>
				</div>

				{/* change array size and speed of visualizer */}
				<div className="col" id="sliders">
					<label htmlFor="changeSize">change array size:</label>
					<input
						type="range"
						name=""
						id="changeSize"
						min="0"
						max="100"
						onChange={changeSize}
						disabled={runStatus}
					/>
					<label htmlFor="changeSpeed">change algorithm speed:</label>
					<input
						type="range"
						name=""
						id="changeSpeed"
						min="0"
						max={minSpeed}
						value={minSpeed - speed}
						onChange={changeSpeed}
						disabled={runStatus}
					/>
				</div>

				{/* choose sorting algorithm */}
				<div className="col">
					<label htmlFor="algorithm">select sorting algorithm:</label>
					<select
						name="algorithm"
						id="algorithm"
						value={algorithm}
						onChange={selectAlgorithm}
						disabled={runStatus}
					>
						<option value="">--</option>
						<option value="selectionSort">Selection Sort</option>
						<option value="insertionSort">Insertion Sort</option>
						<option value="bubbleSort">Bubble Sort</option>
						<option value="hSort">H Sort</option>
						<option value="shellSort">Shell Sort</option>
						<option value="quickSort">QuickSort</option>
						{/* <option value="mergeSort">Merge Sort</option> */}
						{/* <option value="heapSort">Heap Sort</option> */}
					</select>
				</div>

				{/* start sorting */}
				<div className="col">
					<button
						onClick={() => sort(array, algorithm, speed)}
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
