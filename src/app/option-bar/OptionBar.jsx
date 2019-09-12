import React, { useEffect } from "react";
import "./OptionBar.css";
function OptionBar(props) {
	console.log(props);
	const { generateArray } = props;

	//Initialize array
	useEffect(() => {
		generateArray(50);
	}, []);

	//Render logic
	const { array } = props;
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
					<select name="" id="algorithm">
						<option value="">Selection Sort</option>
						<option value="">Insertion Sort</option>
						<option value="">Bubble Sort</option>
						<option value="">H Sort</option>
						<option value="">QuickSort</option>
						<option value="">Merge Sort</option>
						<option value="">Heap Sort</option>
					</select>
				</div>

				{/* start sorting */}
				<div className="col">
					<button>Sort</button>
				</div>
			</div>
		</div>
	);
}

export default OptionBar;
