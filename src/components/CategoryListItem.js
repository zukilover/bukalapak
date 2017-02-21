import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadList } from '../actions/listActions';

class CategoryListItem extends React.Component {
  componentDidMount(){
    this.props.dispatch(loadList());
  }

  render() {
    // const lists = this.props.lists;
    return(
      <li className="category-list-item">
        <a href="">
          <i className="icon icon-expand"></i>
          <span>Batu Cincin</span>
          <small className="category-count">282.000</small>
        </a>
      </li>
    )
  }
}


CategoryListItem.propTypes = {
  lists: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps)(CategoryListItem);
