import React, { PropTypes } from 'react';

class CategoryListItem extends React.Component {
  render() {
    const list = this.props.list;
    return(
      <li className="category-list-item">
        <a href="">
          <i className="icon icon-expand"></i>
          <span>{list.name}</span>
          <small className="category-count">{list.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</small>
        </a>
      </li>
    )
  }
}


CategoryListItem.propTypes = {
  list: PropTypes.object.isRequired
};

export default CategoryListItem;
