import React from "react";

function Body(props) {
	const { array } = props;

	return (
		<div>
			<ul>
				{array.map((el, index) => {
					return (
						<li>
							{index}: {el}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Body;
