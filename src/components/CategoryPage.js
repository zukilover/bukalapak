import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import { loadList, setCategoryDown } from '../actions/listActions';
import config from 'config';

class CategoryPage extends React.Component {
  loadList(){
    this.props.dispatch(loadList(config.MAIN_CATEGORY));
    this.props.dispatch(setCategoryDown());
  }

  render() {
    const lists = this.props.lists;
    return(
      <CategoryList lists={lists} loadList={this.loadList.bind(this)} />
    )
  }
}

CategoryPage.propTypes = {
  lists: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

export default connect(mapStateToProps)(CategoryPage);
