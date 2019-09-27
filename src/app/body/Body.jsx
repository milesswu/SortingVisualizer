import React from "react";
import "./Body.css";

function Body(props) {
	const { array } = props;
	const { sorted, comparing, swapping, significant } = props.elements;

	const numWidth = Math.floor(100 / (array.length * 1.5));
	let width = `${numWidth}vw`;
	if (numWidth < 1) {
		width = `${Math.floor(
			document.innerWidth ||
				document.clientWidth ||
				document.body.clientWidth / (array.length * 2)
		)}px`;
	}
	const numMargin =
		array.length < 5
			? 10
			: array.length < 8
			? 8
			: array.length < 11
			? 6
			: array.length < 20
			? 4
			: array.length < 50
			? 3.5
			: array.length < 100
			? 3
			: array.length < 130
			? 2.5
			: 2;
	const margin = `${numMargin}px`;
	const color = numWidth > 1 ? "white" : "transparent";
	return (
		<div className="bodyContainer">
			{array.length
				? array.map((value, index) => {
						const backgroundColor = swapping.includes(index)
							? "red"
							: comparing.includes(index)
							? "yellow"
							: significant === index
							? "magenta"
							: sorted.includes(index)
							? "green"
							: "blue";

						return (
							<div
								className="arrayElement"
								key={index}
								style={{
									height: `${value * 3}px`,
									width: width,
									marginLeft: margin,
									marginRight: margin,
									backgroundColor: backgroundColor,
									color: color,
								}}
							>
								{value}
							</div>
						);
				  })
				: null}
		</div>
	);
}

export default Body;
