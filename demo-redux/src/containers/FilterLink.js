import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Links'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink



//  the role of containers is to pass down only the amount of data to presentational components that they need; therefore dispatch will not mutate state, only
// update a portion of state; integration takes place back on the reducer

