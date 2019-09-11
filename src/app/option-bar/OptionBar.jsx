import React, { useEffect } from "react";

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
			<button
				id="generateArray"
				onClick={() => generateArray(array.length)}
			>
				Generate New Array
			</button>
		</div>
	);
}

export default OptionBar;
