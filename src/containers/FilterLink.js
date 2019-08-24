import {setVisibilityFilter} from "../action";
import Link from "../components/Link";
import {connect} from 'react-redux'

const mapStateTopProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};


const mapDispatchTopProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};


const FilterLink = connect(
    mapStateTopProps,
    mapDispatchTopProps
)(Link);

export default FilterLink
