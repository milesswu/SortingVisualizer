import { connect } from "react-redux";
import Body from "./Body";

const mapStateToProps = (state) => ({
	array: state.array,
	elements: state.elements,
});

export default connect(mapStateToProps)(Body);
