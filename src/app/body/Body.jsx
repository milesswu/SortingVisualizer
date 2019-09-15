import React from "react";

function Body(props) {
	const { array } = props;
	const { sorted, comparing, swapping, significant } = props.elements;

	return (
		<div>
			<ul>
				{array.length
					? array.map((el, index) => {
							const color = swapping.includes(index)
								? "red"
								: comparing.includes(index)
								? "yellow"
								: significant === index
								? "magenta"
								: sorted.includes(index)
								? "green"
								: "blue";

							return (
								<li key={index} style={{ color: color }}>
									{index}: {el}
								</li>
							);
					  })
					: null}
			</ul>
		</div>
	);
}

export default Body;
