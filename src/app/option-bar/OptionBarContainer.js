import { connect } from "react-redux";
import OptionBar from "./OptionBar";
import { setArray } from "../reducers/array/actions";

const mapStateToProps = (state) => ({
	array: state.array,
});

const mapDispatchToProps = (dispatch) => ({
	generateArray: (length) => {
		let array = [];
		while (array.length < length) {
			array.push(Math.floor(Math.random() * 200) + 10);
		}
		dispatch(setArray(array));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OptionBar);
