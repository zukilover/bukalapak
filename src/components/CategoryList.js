import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoryListItem from './CategoryListItem';

class CategoryList extends React.Component{
  componentDidMount(){
    this.props.loadList();
  }

  render() {
    const lists = this.props.lists;
    const allData = lists.map(list =>
      <CategoryListItem key={list.name} list={list} />
    );

    return (
      <div className="category-list-container">
        <p className="category-head"><strong>Pilih Kategori</strong></p>
        <ul className="category-list category-level-1">
          {allData}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  lists: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps)(CategoryList);
